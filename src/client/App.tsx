import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, Route } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
