import { Input } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { useState } from "react";

export const Searchbar = (onChange, recipe) => {
  console.log(recipe); // <---- UNDEFINED?

  const [searchField, setSearchField] = useState("");
  //   const matchedRecipes = recipe.filter((recipe) => {
  //     return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  //   });
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
