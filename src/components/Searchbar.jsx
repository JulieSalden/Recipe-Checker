import { Input } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = ({ onChange, recipe }) => {
  console.log(recipe);
  // recipe wordt hier niet goed doorgestuurd en onChange niet herkent?

  const [searchField, setSearchField] = useState("");

  const recipeLabels = recipe.map((recipe) => {
    return recipe.label;
  });

  const matchedRecipes = recipeLabels.filter((recipeLabel) => {
    recipeLabel.toLowerCase().includes(searchField.toLowerCase());
  });
  console.log(matchedRecipes);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  //---- DIT WERKT NIET WANT matchedRecipes IS UNDEFINED??

  return (
    <>
      <Input
        onChange={handleChange}
        fontWeight={"450"}
        color="blue.600"
        placeholder="Search for recipe here.."
        width={500}
        mb={20}
        bg="white"
      ></Input>
    </>
  );
};
