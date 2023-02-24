import { Center, Text } from "@chakra-ui/react";

export const RecipeDetails = ({ recipe, onClick }) => {
  return (
    <Center
      onClick={() => {
        onClick;
      }}
    >
      <Text fontWeight={"450"} color="blue.600">
        {recipe.label}
      </Text>
    </Center>
  );
};
