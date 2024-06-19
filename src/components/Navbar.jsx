import { Box, Flex, Link, Spacer, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery }) => {

  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">
          <Link as={RouterLink} to="/">Electronics Store</Link>
        </Heading>
        <InputGroup maxW="300px" mx={2}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
            color="black"
          />
        </InputGroup>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;