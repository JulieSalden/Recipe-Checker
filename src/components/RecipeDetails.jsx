import {
  Center,
  Heading,
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { DietLabels } from "./dietLabels";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "./HealthLabels";
import { Nutrients } from "./Nutrients";
import { Cautions } from "./Cautions";

export const RecipeDetails = ({ onClick, recipe }) => {
  return (
    <>
      <Center
        bgGradient="linear(to-b, green.100, pink.200)"
        p={4}
        color="pink.400"
        pt={20}
        pb={40}
        pl={40}
        pr={40}
        ml={40}
        mr={40}
        borderRadius="50"
        borderColor="green.100"
        borderWidth={8}
      >
        <Box>
          <Center>
            <Heading fontWeight={"450"} color="blue.600" mb={75}>
              {recipe.label}
            </Heading>
          </Center>
          <Flex direction="column" alignItems="center">
            <Box
              width={200}
              borderWidth={3}
              borderColor="pink.200"
              borderRadius={50}
              mb={10}
              bg="pink.100"
            >
              <Box>
                <Flex direction="column" alignItems="center">
                  <Box as="b" mt={2}>
                    {recipe.mealType}
                  </Box>
                  <Box mb={2}>{recipe.dishType}</Box>
                </Flex>
              </Box>{" "}
            </Box>

            <Image
              src={recipe.image}
              width={300}
              height={300}
              alt={recipe.alt}
              borderRadius="50%"
            />
          </Flex>
          <Flex direction="row" gap={20} mt={20}>
            <Box>
              Ingredients:
              <Ingredients recipe={recipe} />
            </Box>
            <Flex direction="column">
              <Flex direction="row">
                <Text mr={2}>Cooking time:</Text>
                <Text color="blue.600">{recipe.totalTime} minutes</Text>
              </Flex>
              <Flex direction="row">
                <Text mr={2}>Servings:</Text>
                <Text color="blue.600"> {recipe.yield}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box mt={5}>
            Dietlabels:{" "}
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <DietLabels recipe={recipe} />
            </Flex>
          </Box>
          <Box mt={5}>
            Healthlabels:{" "}
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <HealthLabels recipe={recipe} />
            </Flex>{" "}
          </Box>
          <Box mt={5}>
            Nutrients:{" "}
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <Nutrients recipe={recipe} />
            </Flex>
          </Box>
          <Box mt={5}>
            Cautions:{" "}
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <Cautions recipe={recipe} />
            </Flex>
          </Box>
        </Box>
      </Center>
      <Center>
        <Button
          onClick={() => {
            onClick();
          }}
          bg="blue.600"
          color="white"
          mt={65}
          mb={65}
        >
          Go back
        </Button>
      </Center>
    </>
  );
};
