import { Center, Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipesPage = (onClick) => {
  const recipes = data.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const [userChoice, setUserChoice] = useState();
  console.log(userChoice);
  return (
    <Center h="100vh" flexDir="column" bg="red.100">
      <Box className="app">
        {userChoice ? (
          <RecipeDetails choice={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <RecipeSearch onClick={setUserChoice} recipe={recipe} />
          </>
        )}
      </Box>
    </Center>
  );
};

// setUseChoice is dus recept want onclick=setuserchoice is hetzelfde als onclick=>(recept)
// dus setuserchoice=recept
// en choice is userchoice dus choice is nu (gekozen) recept (in recipedetails)
// dus dan hoef je niet meer recipe mee te geven maar kun je choice.label etc gebruiken
