import { Center, Image, Text } from "@chakra-ui/react";

export const Recipes = ({ drink, onClick }) => {
  return (
    <Center gap={8} cursor={"pointer"}>
      <Image src={recipe.imgUrl} width={50} height={50} alt={recipe.alt} />
      <Text fontWeight={"450"} color="blue.600">
        {recipe.label}{" "}
      </Text>
    </Center>
  );
};
