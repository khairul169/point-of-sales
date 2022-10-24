import { Box, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCog, FaHome, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const routeList = [
  {
    path: "/",
    icon: <FaHome />,
    title: "Home",
    exact: true,
  },
  {
    path: "/pos",
    icon: <FaShoppingCart />,
    title: "POS",
  },
  {
    path: "/settings",
    icon: <FaCog />,
    title: "Settings",
  },
  {
    path: "/logout",
    icon: <FaArrowRight />,
    title: "Logout",
  },
];

type NavItemProps = {
  path: string;
  icon: React.ReactElement;
  title: string;
  isActive?: boolean;
};

const NavItem = ({ path, icon, title, isActive = false }: NavItemProps) => (
  <IconButton
    as={Link}
    to={path}
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
  const { pathname } = useLocation();

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
      {routeList.map((route) => (
        <React.Fragment key={`route-${route.path}`}>
          {route.path === "/settings" && <Box flex={1} />}

          <NavItem
            path={route.path}
            title={route.title}
            icon={route.icon}
            isActive={
              (route.exact && pathname === route.path) ||
              (!route.exact && pathname.startsWith(route.path))
            }
          />
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default Sidebar;
