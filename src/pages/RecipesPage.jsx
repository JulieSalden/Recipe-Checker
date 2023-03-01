import { Center, Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipesPage = (onClick) => {
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
  console.log(userChoice);

  return (
    <Center h="100vh" flexDir="column" bg="white">
      <Box className="app">
        {userChoice && recipe ? (
          <RecipeDetails choice={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <RecipeSearch
              onClick={setUserChoice}
              recipe={recipe}
              veganRecipes={veganRecipes}
              vegetarianRecipes={vegetarianRecipes}
            />
          </>
        )}
      </Box>
    </Center>
  );
};
