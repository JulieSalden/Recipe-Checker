import { Center, Heading, Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export const RecipeDetails = ({ onClick, choice }) => {
  console.log(choice);

  return (
    <Center>
      <Box
        bgGradient="linear(to-b, green.100, pink.300)"
        w="100%"
        p={4}
        color="white"
      >
        <Heading fontWeight={"450"} color="blue.600">
          {choice.label}
        </Heading>{" "}
        <Box>
          <Text>{choice.mealType}</Text>
        </Box>
        <Box>
          <Text>{choice.dishType}</Text>
        </Box>
        <Image src={choice.image} width={150} height={150} alt={choice.alt} />
        <Box>
          <Text>Dietlabels: {choice.dietLabels}</Text>
        </Box>
        <Box>
          <Text>Healthlabels: {choice.healthLabels}</Text>
        </Box>
        <Box>
          <Text>Cooking time: {choice.totalTime} minutes</Text>
        </Box>
        <Box>
          <Text>Servings: {choice.yield}</Text>
        </Box>
        {/* <Box>
          <Text>{choice.totalNutrients}</Text>
        </Box> */}
        <Box>
          <Text>Cautions: {choice.cautions}</Text>
        </Box>
        <Box>
          <Text>{choice.ingredientLines}</Text>
        </Box>
      </Box>
      <Button
        onClick={() => {
          onClick();
        }}
      >
        Go back
      </Button>
    </Center>
  );
};
