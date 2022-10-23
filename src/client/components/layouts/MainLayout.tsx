import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../containers/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
  overflowY?: boolean;
};

const MainLayout = ({ children, overflowY }: MainLayoutProps) => {
  return (
    <Flex height="100vh" alignItems="stretch">
      <Sidebar />
      <Box flex={1} overflowY={overflowY ? "auto" : "hidden"}>
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
