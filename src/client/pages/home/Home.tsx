import { Box, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { remult } from "remult";
import Product from "../../../shared/models/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await remult
          .repo(Product)
          .find({ orderBy: { name: "asc" } });
        setProducts(result);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box padding={10}>
      <List>
        {products.map((product) => (
          <ListItem key={`product-${product.id}`} marginBottom={5}>
            <VStack alignItems="start">
              <Text>{product.name}</Text>
              {product.variants.map((variant) => (
                <Text
                  key={`variant-${variant.id}`}
                >{`-- ${variant.name}`}</Text>
              ))}
            </VStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
