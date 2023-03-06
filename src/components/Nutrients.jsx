import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Nutrients = ({ recipe }) => {
  const nutrients = recipe.totalNutrients;
  console.log(nutrients);

  const nutrientsArray = Object.keys(nutrients).map((key) => {
    return nutrients[key];
  });
  console.log(nutrientsArray);

  const energy = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Energy";
  });
  console.log(energy);

  const carbs = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Carbs";
  });
  console.log(carbs);

  console.log(energy.label);

  /// en nuuuuu????

  //   const nutrientDisplayArray = [{ energy, carbs }];
  //   console.log(nutrientDisplayArray);

  //   const nutrientDisplay = nutrientDisplayArray.map((nutrient) => {
  //     return nutrient.label & nutrient.quantity;
  //   });

  //   console.log(nutrientDisplay);
};
