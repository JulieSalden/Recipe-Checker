import { Center, Image, Text } from "@chakra-ui/react";

export const Recipes = (onClick, recipe) => {
  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick()}>
      <Image src={recipe.image} width={50} height={50} alt={recipe.alt} />
      <Text fontWeight={"450"} color="blue.600">
        {recipe.name}{" "}
      </Text>
    </Center>
  );
};
