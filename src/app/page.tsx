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

import { Link } from '@chakra-ui/next-js';

export default function Page() {
  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box bg="blue.100">
          <Container maxW="container.xl">
            <Text>fdslfdsf ksfhksdjfkjd esifhudhfksdh</Text>
          </Container>
        </Box>
        <Box display="flex" flexGrow="1" bg="blue.200">
          <Container maxW="container.xl">
            <Text>fdslfdsf ksfhksdjfkjd esifhudhfksdh</Text>
          </Container>
        </Box>
        <Box bg="blue.100">
          <Container maxW="container.xl">
            <Text>fdslfdsf ksfhksdjfkjd esifhudhfksdh</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
