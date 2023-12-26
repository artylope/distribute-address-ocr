// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

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
  useEditable,
} from '@chakra-ui/react';

import WebcamBox from '@/components/WebcamBox';

import { Link } from '@chakra-ui/next-js';

export default function Page() {
  const [recognizedText, setRecognizedText] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);

  function extractAddress(ocrText) {
    // Regular expression for the address
    const regex = /Blk\s+\d+\s+\w+(\s+\w+)*\s+#\d+-\d+\s+Singapore\s+\d{6}/;

    // Searching for the pattern in the text
    const match = ocrText.match(regex);

    // Returning the found address or null if no match is found
    return match ? match[0] : null;
  }

  useEffect(() => {
    setAddress(extractAddress(recognizedText));
  }, [recognizedText]);

  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box bg="gray.50" py="4">
          <Container
            maxW="container.xl"
            display="flex"
            justifyContent="space-between">
            <Text>DistributeSG Address OCR Demo App</Text>
            <Link color="teal.500" href="/address">
              Address Parser
            </Link>
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
          <Container
            display="flex"
            justifyContent="flex-start"
            minH={4}
            maxW="container.xl">
            {recognizedText ? (
              <Box display="flex" flexGrow="1">
                <Text align="center" mt={4}>
                  {recognizedText}
                </Text>
              </Box>
            ) : (
              ''
            )}
            {address ? (
              <Box display="flex" flexGrow="1">
                <Text align="center" mt={4}>
                  {address}
                </Text>
              </Box>
            ) : (
              ''
            )}
          </Container>
          <Container maxW="container.xl" minH="12">
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
