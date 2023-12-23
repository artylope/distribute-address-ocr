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
      h={480}
      bg="black"
      rounded="md"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden">
      {isCameraOn ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640} // Set the desired width (double the height for 3:2 aspect ratio)
          height={480} // Set the desired height
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scale: 1.35,
          }}
        />
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
