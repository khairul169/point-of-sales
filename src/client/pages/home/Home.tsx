import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import BillingCart from "../../components/containers/BillingCart";
import MainLayout from "../../components/layouts/MainLayout";
import useProducts from "../../states/products";

const Home = () => {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <HStack alignItems="stretch" width="full" height="full">
        <VStack flex={1} bgColor="#f8f8f8" alignItems="stretch">
          <HStack p={8} paddingBottom={4}>
            <Box flex={1}>
              <Text fontSize="2xl" fontWeight="medium">
                Welcome, Khai
              </Text>
              <Text fontSize="sm" color="gray.500">
                Discover whatever you need easily
              </Text>
            </Box>
            <InputGroup maxWidth={300}>
              <InputLeftElement children={<FaSearch />} />
              <Input placeholder="Search product..." fontSize="sm" />
            </InputGroup>
          </HStack>

          <SimpleGrid
            columns={{ md: 2, lg: 3, xl: 5 }}
            spacing={4}
            flex={1}
            overflowY="auto"
            paddingX={8}
            paddingBottom={8}
          >
            {products?.map((product) => (
              <Button
                key={`product-${product.id}`}
                bgColor="white"
                borderWidth={1}
                p={8}
                height={140}
                justifyContent="center"
                alignItems="center"
                width="full"
                shadow="sm"
              >
                <Text textAlign="center" noOfLines={1}>
                  {product.name}
                </Text>
              </Button>
            ))}
          </SimpleGrid>
        </VStack>

        <BillingCart />
      </HStack>
    </MainLayout>
  );
};

export default Home;
