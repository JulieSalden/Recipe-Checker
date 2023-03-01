import { Center, Image, Text, Box, Flex } from "@chakra-ui/react";

export const Recipes = ({ onClick, recipes }) => {
  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick(recipes)}>
      <Box
        bgGradient="linear(to-b, green.100, pink.200)"
        w="100%"
        p={4}
        color="white"
        borderRadius={50}
      >
        <Flex direction="column" align="center">
          <Text fontWeight={"450"} color="blue.600">
            {recipes.label}{" "}
          </Text>
          <Image
            src={recipe.image}
            width={220}
            height={220}
            borderRadius="50%"
            alt={recipe.alt}
          />
          <Box>
            <Text>{recipes.mealType}</Text>
          </Box>
          <Box>
            <Text>{recipes.dishType}</Text>
          </Box>
          <Box>
            <Text>{recipes.dietLabels}</Text>
          </Box>
          <Box>
            <Text>
              {/* {veganDish}
              {vegetarianDish} */}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
