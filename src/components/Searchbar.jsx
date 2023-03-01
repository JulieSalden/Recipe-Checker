import { Input } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = (onChange, recipe) => {
  // console.log(recipe); <----- RECIPE KOMT HIER NIET DOOR MAAR VOOR DE REST WEL OVERAL?

  const [searchField, setSearchField] = useState("");

  // const matchedRecipes = recipe
  //   .map((recipe) => {
  //     return recipe.label;
  //   })
  //   .filter((recipe) => {
  //     recipe.label.toLowerCase().includes(searchField.toLowerCase());
  //   });
  // console.log(matchedRecipes);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

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
      {/* <Recipes recipe={matchedRecipes} /> */}
    </>
  );
};
