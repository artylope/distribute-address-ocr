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
      <Container
        maxW="container.xl"
        minH="100vh"
        p={0}
        display="flex"
        flexDirection="column"
        h="100%">
        {/* Header Section */}
        <Box as="header" bg="blue.600" color="white" py={4}>
          <Container maxW="container.xl">
            <HStack>
              <Heading size="lg">My Landing Page</Heading>
              <Spacer />
              <Button colorScheme="teal" variant="outline">
                Log In
              </Button>
              <Button colorScheme="teal">Sign Up</Button>
            </HStack>
          </Container>
        </Box>

        {/* Main Content */}
        <VStack spacing={8} py={10} flexGrow={1} h="100%" bg="blue.50">
          <Heading>Welcome to Our Service</Heading>
          <Text fontSize="xl">
            Here's a simple description of what we do. Enjoy browsing our site!
          </Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
          <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
            About
          </Link>
        </VStack>

        {/* Footer */}
        <Box as="footer" bg="gray.100" color="gray.600" py={4}>
          <Container maxW="container.xl">
            <Text textAlign="center">
              © 2023 My Landing Page. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Container>
    </>
  );
}
