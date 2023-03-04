import { Grid, Box } from "@chakra-ui/react";
import { Recipes } from "./Recipes";

export const RecipeSearch = ({ onClick, recipe }) => {
  console.log(recipe);

  return (
    <Box h="calc(100vh)">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {recipe.map((recipe) => (
          <Box key={Math.random()}>
            <Recipes onClick={onClick} recipe={recipe} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
