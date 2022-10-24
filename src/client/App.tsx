import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./pages/router";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#f46801",
      600: "#fd8227",
      700: "#de5f02",
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
