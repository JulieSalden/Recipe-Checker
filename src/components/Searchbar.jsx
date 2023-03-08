import { Input } from "@chakra-ui/react";
import { useState } from "react";

export const Searchbar = ({ setFilteredRecipes, recipe }) => {
  //usestate om te bepalen welk recept er ingetypt wordt
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = recipe.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  // gefilterede recepten te laten bestaan uit alle recepten die overeen
  // komen met ingetypte waardes searchbalk (usestate aanpassen)
  const handleChange = (event) => {
    setSearchField(event.target.value);
    setFilteredRecipes(matchedRecipes);
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
    </>
  );
};
