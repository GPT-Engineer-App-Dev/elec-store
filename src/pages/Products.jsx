import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: "$149", image: "https://via.placeholder.com/150" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Our Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack mt={4} spacing={2}>
              <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
              <Text fontSize="lg" color="teal.500">{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;