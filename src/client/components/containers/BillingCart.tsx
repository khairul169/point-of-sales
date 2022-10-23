import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const BillingItem = () => (
  <HStack>
    <Box width={16} height={16} bgColor="gray.500" rounded="md" />
    <Box flex={1}>
      <Text fontWeight="medium" fontSize="sm" flex={1} noOfLines={2} mb={0}>
        Smoke Tenderloin Slice Croissant
      </Text>
      <Flex>
        <Text flex={1} fontWeight="bold" color="#f46801">
          10.000
        </Text>
        <IconButton icon={<FaPlus size={10} />} aria-label="Add" size="xs" />
        <Input
          size="xs"
          width={8}
          border="none"
          background="transparent"
          textAlign="center"
          defaultValue="1"
        />
        <IconButton
          icon={<FaMinus size={10} />}
          aria-label="Reduce"
          size="xs"
        />
      </Flex>
    </Box>
  </HStack>
);

const BillingCart = () => {
  return (
    <VStack width="300px" bgColor="white" p={4} pb={6} alignItems="stretch">
      <Text fontSize="lg" fontWeight="medium" my={3}>
        Current Order
      </Text>

      <VStack flex={1} overflowY="auto" py={2} spacing={5}>
        <BillingItem />
        <BillingItem />
        <BillingItem />
        <BillingItem />
      </VStack>

      <Box bgColor="#f8f8f8" p={4} rounded="md">
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Subtotal
          </Text>
          <Text fontWeight="medium">Rp 50.000</Text>
        </HStack>
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Discount
          </Text>
          <Text fontWeight="medium">-Rp 10.000</Text>
        </HStack>
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Tax
          </Text>
          <Text fontWeight="medium">Rp 4.000</Text>
        </HStack>
        <Divider
          borderColor="#ccc"
          borderStyle="dashed"
          borderBottomWidth={3}
          my={3}
        />
        <HStack>
          <Text flex={1} fontSize="lg">
            Total
          </Text>
          <Text fontWeight="medium" fontSize="lg">
            Rp 44.000
          </Text>
        </HStack>
      </Box>

      <Button
        bgColor="#f46801"
        color="white"
        _hover={{ bgColor: "#fd8227" }}
        py={6}
        fontWeight="normal"
      >
        Continue to Payment
      </Button>
    </VStack>
  );
};

export default BillingCart;
