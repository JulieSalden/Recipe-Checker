import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Recipes } from "./Recipes";

export const ButtonVegan = ({ onClick, veganRecipes }) => {
  // const [userChoice, setUserChoice] = useState();
  const filterVeganRecipes = (veganRecipes) => {
    setFilteredRecipes(veganRecipes);
  };

  return (
    <>
      <Button
        onClick={() => {
          () => onClick(filterVeganRecipes);
        }}
        veganrecipes={veganRecipes}
      >
        Vegan
      </Button>
      {/* <Recipes recipe={veganRecipes} /> */}
    </>
  );
};
