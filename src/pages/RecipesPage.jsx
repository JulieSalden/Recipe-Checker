import { Center, Box, Grid, Flex, Heading } from "@chakra-ui/react";
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

  // verzamelen van vegan en vega gerechten
  const veganRecipes = recipes.filter(({ recipe }) =>
    recipe.healthLabels.includes("Vegan")
  );

  const vegetarianRecipes = recipes.filter(({ recipe }) =>
    recipe.healthLabels.includes("Vegetarian")
  );

  const [userChoice, setUserChoice] = useState();

  const [unfilteredRecipes, setFilteredRecipes] = useState();

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
        {userChoice && recipe ? (
          <RecipeDetails recipe={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <Flex direction="column" flexWrap="wrap" align="center">
              <Flex direction="row" gap={2}>
                <Searchbar onchange={onChange} recipe={recipe} />
                <ButtonVeg
                  recipe={unfilteredRecipes}
                  onClick={setFilteredRecipes}
                  vegetarianrecipes={vegetarianRecipes}
                />
                <ButtonVegan
                  recipe={unfilteredRecipes}
                  onClick={setFilteredRecipes}
                  veganrecipes={veganRecipes}
                />
              </Flex>
            </Flex>

            <RecipeSearch onClick={setUserChoice} recipe={recipe} />
          </>
        )}
      </Box>
    </Center>
  );
};
