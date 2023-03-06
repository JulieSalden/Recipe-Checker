import { Center, Image, Text, Box, Flex } from "@chakra-ui/react";
import { DietLabels } from "./dietLabels";

export const Recipes = ({ onClick, recipe, veganDish, vegetarianDish }) => {
  // HOE KRIJG IK VEGAN OF VEGA GEDISPLAYED?

  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick(recipe)}>
      <Box
        bgGradient="linear(to-b, green.100, pink.200)"
        w="100%"
        h={450}
        p={4}
        color="white"
        borderRadius={50}
        borderColor="green.100"
        borderWidth={8}
      >
        <Flex direction="column" align="center">
          <Text fontWeight={"450"} color="blue.600">
            {recipe.label}{" "}
          </Text>
          <Image
            src={recipe.image}
            width={220}
            height={220}
            borderRadius="50%"
            alt={recipe.alt}
            mt={15}
            mb={25}
          />
          <Box>
            <Text color="pink.400">{recipe.mealType}</Text>
          </Box>
          <Box>
            <Text>{recipe.dishType}</Text>
          </Box>
          <Box>
            <DietLabels recipe={recipe} />
          </Box>
          <Box>
            {veganDish}
            {vegetarianDish}
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
