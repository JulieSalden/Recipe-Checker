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

export const RecipeDetails = ({ onClick, recipe }) => {
  console.log(recipe);
  const cautions = recipe.cautions;
  console.log(cautions);

  if (cautions.lenght > 0) {
    cautions.split(",");
    return cautions;
  }
  console.log(cautions);

  // IK WIL GRAAG DE CAUTIONS MET EEN SPATIE ER TUSSEN ??

  return (
    <>
      <Center
        bgGradient="linear(to-b, green.100, pink.200)"
        w="100%"
        p={4}
        color="pink.400"
        pt={20}
        pb={40}
        pl={40}
        pr={40}
        borderRadius="50"
        borderColor="green.100"
        borderWidth={8}
      >
        <Box>
          <Heading fontWeight={"450"} color="blue.600" mb={65}>
            {recipe.label}
          </Heading>
          <Grid>
            <GridItem>
              <Box>{recipe.mealType}</Box>
              <Box>{recipe.dishType}</Box>
            </GridItem>
            <GridItem>
              <Image
                src={recipe.image}
                width={250}
                height={250}
                alt={recipe.alt}
                borderRadius="50%"
              />
            </GridItem>
          </Grid>
          <Box>
            Ingredients:
            <Ingredients recipe={recipe} />
          </Box>
          <Box>
            Cooking time:
            <Text color="blue.600">{recipe.totalTime} minutes</Text>
          </Box>
          <Box>
            Servings: <Text color="blue.600">{recipe.yield}</Text>
          </Box>
          <Box>
            Dietlabels: <DietLabels recipe={recipe} />
          </Box>
          <Box>
            Healthlabels: <HealthLabels recipe={recipe} />
          </Box>
          <Box>
            <Nutrients recipe={recipe} />
          </Box>
          <Box>
            Cautions: <Text color="blue.600"> {cautions}</Text>
          </Box>
        </Box>{" "}
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
