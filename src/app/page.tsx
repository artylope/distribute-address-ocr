// app/page.tsx
'use client';

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
            justifyContent="center"
            alignItems="center">
            <WebcamBox />
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
