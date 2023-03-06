import { Center, Box, Grid, Flex, Heading, Button } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";
import { ButtonVeg } from "../components/ButtonVeg";
import { ButtonVegan } from "../components/ButtonVegan";
import { Searchbar } from "../components/Searchbar";

export const RecipesPage = ({ onClick, onChange }) => {
  // deze gebruik ik om vegan en vega op te filteren
  const recipes = data.hits;

  // deze gebruik ik om door te sturen en properties van te gebruiken
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const [userChoice, setUserChoice] = useState();

  const [filteredRecipes, setFilteredRecipes] = useState();

  // oude manier, werkte eerst wel nu niet meer
  const filterVegetarianRecipes = () => {
    const vegetarianRecipes = recipe.filter(({ recipe }) =>
      recipe.healthLabels.includes("Vegetarian")
    );
    setFilteredRecipes(vegetarianRecipes);

    console.log(vegetarianRecipes);
  };

  // nieuwe manier, werkt niet
  const filterVeganRecipes = () => {
    const veganRecipes = filteredRecipes.filter((recipe) => recipe.isVegan);
    setFilteredRecipes(veganRecipes);

    console.log(veganRecipes);
  };

  const resetFilters = () => {
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <Center flexDir="column" bg="white">
      <Center
        width="100%"
        height={60}
        mb={20}
        bgGradient="linear(to-b, pink.200, white)"
      >
        <Heading size="2xl" color="blue.700" as="i">
          Recipe checker
        </Heading>
      </Center>
      <Box className="app">
        {userChoice ? (
          <RecipeDetails recipe={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <Flex direction="column" flexWrap="wrap" align="center">
              <Flex direction="row" gap={2}>
                <Searchbar onchange={onChange} recipe={recipe} />
                <Button onClick={filterVegetarianRecipes}>Vegetarian</Button>
                <Button onClick={filterVeganRecipes}>Vegan</Button>
                <Button onClick={resetFilters}>Show All</Button>
              </Flex>
            </Flex>

            <RecipeSearch onClick={setUserChoice} recipe={recipe} />
          </>
        )}
      </Box>
    </Center>
  );
};
