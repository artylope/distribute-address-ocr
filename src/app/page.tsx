// app/page.tsx
'use client';

import Webcam from 'react-webcam';

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

import { Link } from '@chakra-ui/next-js';

export default function Page() {
  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>Header</Text>
          </Container>
        </Box>
        <Box display="flex" flexGrow="1" bg="white" py="4">
          <Container maxW="container.xl">
            <Webcam />
            <Text>Body</Text>
          </Container>
        </Box>
        <Box bg="gray.50" py="4">
          <Container maxW="container.xl">
            <Text>Footer</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
