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
import useBillingCart, { IBillingCartItem } from "../../states/billingCart";
import { formatCurrency } from "../../../shared/utils/utility";

type BillingItemProps = {
  item: IBillingCartItem;
  onUpdate: (values: any) => void;
};

const BillingItem = ({ item, onUpdate }: BillingItemProps) => (
  <HStack width="full" spacing={4}>
    <Box width={16} height={16} bgColor="gray.500" rounded="md" />
    <Box flex={1}>
      <Text
        fontWeight="medium"
        fontSize="sm"
        flex={1}
        noOfLines={2}
        mb={0}
        minHeight={8}
      >
        {`${item.product.name} - ${item.variant.name}`}
      </Text>
      <Flex>
        <Text flex={1} fontWeight="bold" color="#f46801">
          {formatCurrency(item.total)}
        </Text>
        <IconButton
          icon={<FaPlus size={10} />}
          aria-label="Add"
          size="xs"
          onClick={() =>
            onUpdate({ quantity: Math.min(999, item.quantity + 1) })
          }
        />
        <Input
          size="xs"
          type="number"
          width={8}
          border="none"
          background="transparent"
          textAlign="center"
          value={`${item.quantity}`}
          onChange={(e) =>
            onUpdate({
              quantity: parseInt(e.currentTarget.value, 10) || 1,
            })
          }
        />
        <IconButton
          icon={<FaMinus size={10} />}
          aria-label="Reduce"
          size="xs"
          onClick={() => onUpdate({ quantity: Math.max(0, item.quantity - 1) })}
        />
      </Flex>
    </Box>
  </HStack>
);

const BillingCart = () => {
  const { items, subtotal, discount, tax, total, updateItem } =
    useBillingCart();

  return (
    <VStack width="300px" bgColor="white" p={4} pb={6} alignItems="stretch">
      <Text fontSize="lg" fontWeight="medium" my={3}>
        Current Order
      </Text>

      <VStack flex={1} overflowY="auto" py={2} spacing={5}>
        {items.map((item, idx) => (
          <BillingItem
            key={`cart-${idx}`}
            item={item}
            onUpdate={(values) => updateItem(idx, values)}
          />
        ))}
      </VStack>

      <Box bgColor="#f8f8f8" p={4} rounded="md">
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Subtotal
          </Text>
          <Text fontWeight="medium">{formatCurrency(subtotal)}</Text>
        </HStack>
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Discount
          </Text>
          <Text fontWeight="medium">{formatCurrency(-discount)}</Text>
        </HStack>
        <HStack>
          <Text flex={1} color="gray.500" fontSize="sm">
            Tax
          </Text>
          <Text fontWeight="medium">{formatCurrency(tax)}</Text>
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
            {formatCurrency(total)}
          </Text>
        </HStack>
      </Box>

      <Button colorScheme="primary" color="white" py={6} fontWeight="normal">
        Continue to Payment
      </Button>
    </VStack>
  );
};

export default BillingCart;
