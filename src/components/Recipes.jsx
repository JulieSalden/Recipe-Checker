import { Center, Image, Text } from "@chakra-ui/react";
import { data } from "../utils/data";

export const Recipes = (onClick) => {
  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick()}>
      <Image
        src={data.hits.recipe.imgUrl}
        width={50}
        height={50}
        alt={drink.alt}
      />
      <Text fontWeight={"450"} color="blue.600">
        {data.hits.recipe.name}{" "}
      </Text>
    </Center>
  );
};
