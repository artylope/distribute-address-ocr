import React, { useState, useRef } from 'react';
import { Box, IconButton, Button } from '@chakra-ui/react';
import Webcam from 'react-webcam';

import { PlayCircle, PauseCircle } from '@phosphor-icons/react';

const WebcamBox = () => {
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

  return (
    <Box
      w={480}
      h={360}
      bg="black"
      rounded="md"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center">
      {isCameraOn ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          height={360}
        />
      ) : (
        ''
      )}
      {isCameraOn ? (
        <Box position="absolute" top="0" right="0">
          {' '}
          <IconButton
            variant="ghost"
            colorScheme="white"
            aria-label="Start Camera"
            size="lg"
            icon={<PauseCircle size={32} weight="bold" color="white" />}
            onClick={isCameraOn ? stopCamera : startCamera}
          />
        </Box>
      ) : (
        <IconButton
          variant="ghost"
          colorScheme="white"
          aria-label="Start Camera"
          size="lg"
          icon={<PlayCircle size={32} weight="bold" color="white" />}
          onClick={isCameraOn ? stopCamera : startCamera}
        />
      )}
    </Box>
  );
};

export default WebcamBox;
