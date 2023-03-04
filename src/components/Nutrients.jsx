import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Nutrients = ({ recipe }) => {
  const nutrients = recipe.totalNutrients;
  console.log(nutrients);

  //   return nutrients.map((nutrient) => {
  //     return <Text color="blue.600" key={uuid()}>{nutrient}</Text>;
  //   });

  const energy = nutrients[1];
  console.log(energy);
};
