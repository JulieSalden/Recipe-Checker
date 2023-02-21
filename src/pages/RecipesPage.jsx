import { Center, Heading, Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipesPage = () => {
  const recipes = data.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const [userChoice, setUserChoice] = useState();
  return (
    <Center h="100vh" flexDir="column">
      <Heading mb={20} size="xl" color="blue.700">
        Recipe health checker
      </Heading>
      <Box className="app">
        {userChoice ? (
          <RecipeDetails choice={userChoice} onClick={onClick} />
        ) : (
          <>
            <RecipeSearch onClick={setUserChoice} />
          </>
        )}
      </Box>
    </Center>
  );
};
