// app/page.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Spacer,
} from '@chakra-ui/react';

import WebcamBox from '@/components/WebcamBox';

import { Link } from '@chakra-ui/next-js';

export default function Page() {
  const [recognizedText, setRecognizedText] = useState('');
  const [photo, setPhoto] = useState(null);
  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>DistributeSG Address OCR Demo App</Text>
          </Container>
        </Box>

        <Box
          display="flex"
          flexGrow="1"
          bg="white"
          py="4"
          overflow="hidden"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center">
          <Container
            maxH={800}
            maxW="container.xl"
            display="flex"
            flexGrow="1"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <WebcamBox
              recognizedText={recognizedText}
              setRecognizedText={setRecognizedText}
              photo={photo}
              setPhoto={setPhoto}
            />
          </Container>
        </Box>
        <Box>
          <Container h={24} maxW="container.xl">
            {photo ? (
              <Box
                w={36}
                display="flex"
                justifyContent="center"
                alignItems="center">
                <img src={photo} alt="photo taken by camera" />
              </Box>
            ) : (
              ''
            )}
          </Container>
          <Container h={24} maxW="container.xl">
            {recognizedText ? (
              <Text align="center" mt={4}>
                {recognizedText}
              </Text>
            ) : (
              ''
            )}
          </Container>
        </Box>
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>Artylope</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
