// app/page.tsx
'use client';
import React, { useState } from 'react';
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
  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>DistributeSG Address OCR Demo App</Text>
          </Container>
        </Box>
        <Box display="flex" flexGrow="1" bg="white" py="4">
          <Container
            maxW="container.xl"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <WebcamBox
              recognizedText={recognizedText}
              setRecognizedText={setRecognizedText}
            />
            <Box>
              <Box h={16}>
                {recognizedText ? <Text mt={4}>{recognizedText}</Text> : ''}
              </Box>
            </Box>
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
