import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <VStack spacing={"8"}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400,blue.500)"}
          bgClip={"text"}
          textalign={"center"}
        >
          Current Product 🚀
        </Text>

        <Text
          fontSize={"xl"}
          textalign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
        >
          No product found 😞{" "}
          <Link to={"/create"}>
            <Text as={"span"} color={"blue.500"} textDecoration={"underline"}>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
