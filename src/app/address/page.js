'use client';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  Spacer,
  Button,
  Textarea,
  Text,
} from '@chakra-ui/react';

const page = () => {
  const [addressString, setAddressString] = useState('');
  const [parsedAddress, setParsedAddress] = useState({
    blockNumber: '',
    postalCode: '',
    roadName: '',
    floorNumber: '',
    unitNumber: '',
    buildingName: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e, key) => {
    setParsedAddress({
      ...parsedAddress,
      [key]: e.target.value,
    });
  };

  function extractBlockNumber(address) {
    const pattern = /(?:\bblk\b|\bblock\b|\bapt\b)?\s?(\d+[A-Za-z]?)/i;
    const match = address.match(pattern);
    return match ? match[1] : null;
  }

  function extractPostalCode(address) {
    const pattern = /(?:Singapore\s*)?(?:S)?(\d{6})\b/;
    const match = address.match(pattern);
    return match ? match[1] : null;
  }

  function extractRoadName(address) {
    const pattern =
      /(?:\d+[A-Za-z]?|\bblk\b|\bBLOCK\b|\bapt\b|\bAPT\b)\s+([\w\s]+?)(?:\s+#|\s+\d{2}-\d{2}|\s+S?\d{6}|$)/i;
    const match = address.match(pattern);
    return match ? match[1].trim() : null;
  }

  function extractFloorNumber(address) {
    const pattern = /(?:#)?(\d+)[-/B]?/;
    const match = address.match(pattern);
    return match ? match[1] : null; // match[1] for the floor number
  }

  function extractUnitNumber(address) {
    const pattern = /-(\d+)|#(\d+)-(\d+)/;
    const match = address.match(pattern);
    return match ? match[1] || match[3] : null;
  }

  const handleParseAddress = () => {
    const block = extractBlockNumber(addressString);
    const postal = extractPostalCode(addressString);
    const road = extractRoadName(addressString);
    const floor = extractFloorNumber(addressString);
    const unit = extractUnitNumber(addressString);

    if (addressString.trim()) {
      setParsedAddress({
        Block: block || '',
        PostalCode: postal || '',
        RoadName:
          road.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          ) || '',
        Floor: floor || '',
        Unit: unit || '',
      });
      setError('');
    } else {
      setError('Please enter an address.');
    }
  };

  return (
    <Box>
      <Container maxW="container.xl" py="4">
        <VStack spacing={4}>
          <Textarea
            placeholder="Enter address here"
            value={addressString}
            onChange={(e) => setAddressString(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleParseAddress}>
            Parse Address
          </Button>
          {error && <Text color="red.500">{error}</Text>}
          <Box>
            {Object.entries(parsedAddress).map(([key, value]) => (
              <HStack key={key} width="full" mb="6">
                <Text width="120px" mb="2" w="200px">{`${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }:`}</Text>
                <Input
                  w="xl"
                  value={value}
                  onChange={(e) => handleInputChange(e, key)}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              </HStack>
            ))}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default page;
