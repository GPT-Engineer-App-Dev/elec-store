import { Box, SimpleGrid, Image, Text, VStack, Heading, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: 199, category: "Wearables", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: 149, category: "Accessories", image: "https://via.placeholder.com/150" },
];

const Products = ({ searchQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        product.price >= priceRange[0] && product.price <= priceRange[1]
      )
    );
  }, [searchQuery, selectedCategories, priceRange]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Our Products</Heading>
      <Box mb={6}>
        <Heading as="h3" size="lg" mb={4}>Filters</Heading>
        <CheckboxGroup colorScheme="teal" value={selectedCategories} onChange={handleCategoryChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="Electronics">Electronics</Checkbox>
            <Checkbox value="Wearables">Wearables</Checkbox>
            <Checkbox value="Accessories">Accessories</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Box mt={4}>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            aria-label="price-range-slider"
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={10}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
        </Box>
        <Button mt={4} colorScheme="teal" onClick={resetFilters}>Reset Filters</Button>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack mt={4} spacing={2}>
              <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
              <Text fontSize="lg" color="teal.500">${product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;