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
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Product from "../../../shared/models/Product";
import AddBillingModal from "../../components/containers/AddBillingModal";
import BillingCart from "../../components/containers/BillingCart";
import MainLayout from "../../components/layouts/MainLayout";
import useProducts from "../../states/products";

type BillingModalState = {
  data?: Product;
  isOpen: boolean;
};

const Home = () => {
  const { products, fetchProducts } = useProducts();
  const [billingModal, setBillingModal] = useState<BillingModalState>({
    isOpen: false,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <HStack alignItems="stretch" width="full" height="full">
        <VStack flex={1} bgColor="#f8f8f8" alignItems="stretch">
          <HStack
            p={8}
            paddingBottom={4}
            display={{ base: "block", lg: "flex" }}
            spacing={0}
          >
            <Box flex={1} mb={{ base: 3, lg: 0 }}>
              <Text fontSize="2xl" fontWeight="medium">
                Welcome, Khai
              </Text>
              <Text fontSize="sm" color="gray.500">
                Discover whatever you need easily
              </Text>
            </Box>
            <InputGroup maxWidth={{ lg: 300 }}>
              <InputLeftElement children={<FaSearch />} />
              <Input placeholder="Search product..." fontSize="sm" />
            </InputGroup>
          </HStack>

          <Box flex={1} overflowY="auto">
            <SimpleGrid
              columns={{ md: 2, lg: 3, xl: 5 }}
              spacing={4}
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
                  onClick={() =>
                    setBillingModal({ data: product, isOpen: true })
                  }
                >
                  <Text textAlign="center" noOfLines={1}>
                    {product.name}
                  </Text>
                </Button>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>

        <BillingCart />
      </HStack>

      <AddBillingModal
        data={billingModal.data}
        isOpen={billingModal.isOpen}
        onClose={() =>
          setBillingModal((state) => ({ ...state, isOpen: false }))
        }
      />
    </MainLayout>
  );
};

export default Home;
