import { Flex, Input, Grid, Box, Heading, Button } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { ButtonVeg } from "./ButtonVeg";
import { ButtonVegan } from "./ButtonVegan";
import { Searchbar } from "./Searchbar";

export const RecipeSearch = ({
  onClick,
  onChange,
  recipe,
  veganRecipes,
  vegetarianRecipes,
}) => {
  console.log(recipe);

  return (
    <Box h="calc(100vh)">
      <Flex direction="column" flexWrap="wrap" align="center">
        <Heading mb={20} mt={20} size="2xl" color="blue.700" as="i">
          Recipe checker
        </Heading>
        <Flex gridTemplateRows="repeat(3, 1fr)" gap={2}>
          <Searchbar onchange={onChange} recipe={recipe} />
          <ButtonVeg onClick={onClick} recipe={vegetarianRecipes} />
          <ButtonVegan onClick={onClick} recipe={veganRecipes} />
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipe.map((recipe) => (
            <Box key={Math.random()}>
              <Recipes onClick={onClick} recipe={recipe} />
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
