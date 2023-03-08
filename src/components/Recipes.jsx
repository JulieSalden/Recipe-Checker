import { Center, Image, Text, Box, Flex } from "@chakra-ui/react";
import { DietLabels } from "./dietLabels";

// voor de display van vegan of vega in het receptenblokje
export const Recipes = ({ onClick, recipe }) => {
  const VeggyLabels = () => {
    if (recipe.healthLabels.includes("Vegan")) {
      return "Vegan";
    }
    if (recipe.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    } else return "";
  };

  // alle info in het receptenblokje op de voorpagina
  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick(recipe)}>
      <Box
        bgGradient="linear(to-b, green.100, pink.200)"
        w="100%"
        h={475}
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
            <Text color="green.500" as="i">
              {VeggyLabels()}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
