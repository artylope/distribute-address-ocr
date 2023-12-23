import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Button, Text } from '@chakra-ui/react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

import { PlayCircle, PauseCircle } from '@phosphor-icons/react';
import { relative } from 'path';

const WebcamBox = ({ recognizedText, setRecognizedText, photo, setPhoto }) => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const stopCamera = () => {
    setIsCameraOn(false);
    if (webcamRef.current) {
      const mediaStream = webcamRef.current.video.srcObject;
      if (mediaStream) {
        const tracks = mediaStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
  };

  useEffect(() => {
    if (isCameraOn) {
      const intervalId = setInterval(() => {
        if (webcamRef.current) {
          const canvas = webcamRef.current.getCanvas();
          if (canvas) {
            Tesseract.recognize(canvas)
              .then(({ data: { text } }) => {
                setRecognizedText(text);
              })
              .catch((error) => {
                console.error('Error recognizing text:', error);
              });
          }
        }
      }, 2000); // Adjust the interval as needed
      return () => clearInterval(intervalId);
    } else {
      setRecognizedText('');
    }
  }, [isCameraOn]);

  const videoConstraints = {
    facingMode: 'environment' || 'user',
  };

  return (
    <Box
      w="100%"
      maxW="container.2xl"
      bg="black"
      rounded="md"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      flexGrow="1">
      {isCameraOn ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          screenshotQuality={1}
          width={640} // Set the desired width (double the height for 3:2 aspect ratio)
          height={480} // Set the desired height
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scale: 1.35,
            flexGrow: 1,
            position: 'relative',
          }}>
          {({ getScreenshot }) => (
            <Button
              onClick={() => {
                let screenshot = getScreenshot();
                setPhoto(screenshot);
              }}>
              Capture photo
            </Button>
          )}
        </Webcam>
      ) : (
        ''
      )}
      {isCameraOn ? (
        <Box
          position="absolute"
          top="0"
          right="0"
          h={16}
          w={16}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={isCameraOn ? stopCamera : startCamera}>
          {' '}
          <IconButton
            variant="ghost"
            colorScheme="white"
            aria-label="Start Camera"
            size="2xl"
            icon={<PauseCircle size={36} weight="bold" color="white" />}
          />
        </Box>
      ) : (
        <Box
          h={16}
          w={16}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={isCameraOn ? stopCamera : startCamera}>
          <IconButton
            variant="ghost"
            colorScheme="white"
            aria-label="Start Camera"
            size="2xl"
            icon={<PlayCircle size={36} weight="bold" color="white" />}
          />{' '}
        </Box>
      )}
    </Box>
  );
};

export default WebcamBox;
