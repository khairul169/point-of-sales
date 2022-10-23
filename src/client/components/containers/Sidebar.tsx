import { Box, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { FaCog, FaHome, FaShoppingCart, FaArrowRight } from "react-icons/fa";

type NavItemProps = {
  icon: React.ReactElement;
  title: string;
  isActive?: boolean;
};

const NavItem = ({ icon, title, isActive = false }: NavItemProps) => (
  <IconButton
    icon={icon}
    aria-label={title}
    width="full"
    variant="ghost"
    rounded="none"
    borderRightWidth={3}
    borderColor={isActive ? "#f46801" : "transparent"}
    color={isActive ? "#f46801" : "gray.500"}
    _hover={{ color: "#f46801" }}
  />
);

const Sidebar = () => {
  return (
    <VStack
      width="64px"
      bgColor="white"
      height="full"
      overflowY="auto"
      spacing={1}
      py={6}
    >
      <Box height={20} />
      <NavItem title="Home" icon={<FaHome />} />
      <NavItem title="POS" icon={<FaShoppingCart />} isActive />
      <Box flex={1} />
      <NavItem title="Settings" icon={<FaCog />} />
      <NavItem title="Logout" icon={<FaArrowRight />} />
    </VStack>
  );
};

export default Sidebar;
