import { Flex, Input, Grid, Box, Heading, Button } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { ButtonVeg } from "./ButtonVeg";
import { ButtonVegan } from "./ButtonVegan";
import { Searchbar } from "./Searchbar";

export const RecipeSearch = ({ onClick, onChange, recipe }) => {
  console.log(recipe);
  const healthLabels = recipe.healthLabels;
  console.log(healthLabels);

  //   const VegetarianDish = healthLabels.filter((healthLabel) => {
  //     healthLabel.includes("Vegetarian");
  //   });

  //   const VeganDish = healthLabels.filter((healthLabel) => {
  //     healthLabel.includes("Vegan");
  //   });

  // WERKT NIET WANT FILTER IS NOT A FUNCTION..??

  return (
    <Box h="calc(100vh)">
      <Flex direction="column" flexWrap="wrap" align="center">
        <Heading mb={20} mt={20} size="2xl" color="blue.700" as="i">
          Recipe checker
        </Heading>
        <Flex gridTemplateRows="repeat(3, 1fr)" gap={2}>
          <Searchbar onchange={onChange} recipe={recipe} />
          {/* <ButtonVeg healthLabels={healthLabels} recipe={VegetarianDish} />
          <ButtonVegan healthLabels={healthLabels} recipe={VeganDish} /> */}
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipe.map((recipe) => (
            <Box key={recipe.label}>
              <Recipes onClick={onClick} recipe={recipe} />
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
