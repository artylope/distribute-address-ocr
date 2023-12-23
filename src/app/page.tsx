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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"></Box>
        <Box
          display="flex"
          flexGrow="1"
          h="100%"
          bg="white"
          py="4"
          overflow="hidden"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Container
            h="100%"
            maxW="container.xl"
            display="flex"
            flexGrow="1"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <WebcamBox
              recognizedText={recognizedText}
              setRecognizedText={setRecognizedText}
            />
          </Container>
        </Box>
        <Container maxW="container.xl" bg="gray.100">
          {recognizedText ? (
            <Text align="center" mt={4}>
              {recognizedText}
            </Text>
          ) : (
            ''
          )}
        </Container>
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>Artylope</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
