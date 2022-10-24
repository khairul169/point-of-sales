import {
  Modal as ModalBase,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
};

const Modal = (props: ModalProps) => {
  const {
    title,
    children,
    isOpen,
    onClose,
    onConfirm,
    confirmText = "OK",
  } = props;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          {onConfirm != null && (
            <Button colorScheme="blue" onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ModalBase>
  );
};

export default Modal;
