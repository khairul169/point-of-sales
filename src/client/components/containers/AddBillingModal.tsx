import { Box, Button, HStack, IconButton, Input, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Product from "../../../shared/models/Product";
import { formatCurrency } from "../../../shared/utils/utility";
import useBillingCart, { IBillingCartItem } from "../../states/billingCart";
import Modal from "../units/Modal";

type AddBillingModalProps = {
  data?: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

const AddBillingModal = ({ data, isOpen, onClose }: AddBillingModalProps) => {
  const [formData, setFormData] = useState<IBillingCartItem | null>(null);
  const addItem = useBillingCart((state) => state.addItem);

  useEffect(() => {
    if (data) {
      const variant = data.variants[0];
      setFormData({
        product: data,
        variant: variant,
        price: variant.price,
        quantity: 1,
        total: variant.price,
      });
    }
  }, [data]);

  const updateFormData = (values: any) => {
    setFormData((state) => {
      const newState: IBillingCartItem = { ...state, ...values };
      newState.price = newState.variant.price;
      newState.total = newState.price * newState.quantity;
      return newState;
    });
  };

  if (!data || !formData) {
    return null;
  }

  return (
    <Modal
      title={data!.name || "Add Product"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => {
        addItem(formData);
        onClose();
      }}
      confirmText="Add To Cart"
    >
      <HStack flexWrap="wrap">
        {data!.variants.map((variant) => (
          <Button
            variant={variant.id === formData.variant.id ? "solid" : "outline"}
            colorScheme="primary"
            key={`variant-${variant.id}`}
            onClick={() => updateFormData({ variant })}
            borderWidth={1}
          >
            {variant.name}
          </Button>
        ))}
      </HStack>

      <HStack mt={5}>
        <IconButton
          icon={<FaPlus size={10} />}
          aria-label="Add"
          onClick={() =>
            updateFormData({ quantity: Math.min(999, formData.quantity + 1) })
          }
        />
        <Input
          type="number"
          border="none"
          background="transparent"
          textAlign="center"
          value={`${formData.quantity}`}
          onChange={(e) =>
            updateFormData({
              quantity: parseInt(e.currentTarget.value, 10) || 1,
            })
          }
          width={16}
        />
        <IconButton
          icon={<FaMinus size={10} />}
          aria-label="Reduce"
          onClick={() =>
            updateFormData({ quantity: Math.max(1, formData.quantity - 1) })
          }
        />
        <Box flex={1} />
        <Text color="primary.500" fontWeight="medium" fontSize="3xl">
          {formatCurrency(formData!.total)}
        </Text>
      </HStack>
    </Modal>
  );
};

export default AddBillingModal;
