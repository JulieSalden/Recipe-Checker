import { Flex, Input, Grid, Box, Heading, Button } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { ButtonVeg } from "./ButtonVeg";
import { ButtonVegan } from "./ButtonVegan";
import { Searchbar } from "./Searchbar";

export const RecipeSearch = ({ onClick, onChange, recipes }) => {
  console.log(recipes);

  // const veganLabels = recipe.map(({ recipe }) =>
  //   recipe.healthLabels.includes("Vegan")
  // );
  // console.log(veganLabels);

  // niet gebruiken
  // const healthLabels = recipe.map((recipe) => {
  //   return recipe.healthLabels;
  // });
  // console.log(healthLabels);

  // const veganlabels = healthLabels.map((healthlabel) => {
  //   return healthlabel.contains("Vegan");
  // });

  // console.log(veganlabels);

  // const vegetarianlabels = healthLabels.map((healthlabel) => {
  //   return healthlabel.filter((healthLabel) => {
  //     return healthLabel === "Vegetarian";
  //   });
  // });

  // console.log(vegetarianlabels);

  return (
    <Box h="calc(100vh)">
      <Flex direction="column" flexWrap="wrap" align="center">
        <Heading mb={20} mt={20} size="2xl" color="blue.700" as="i">
          Recipe checker
        </Heading>
        <Flex gridTemplateRows="repeat(3, 1fr)" gap={2}>
          <Searchbar onchange={onChange} recipe={recipes} />
          {/* <ButtonVeg onClick={onClick} recipe={recipe} />
          <ButtonVegan onClick={onClick} recipe={recipe} /> */}
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipes.map((recipe) => (
            <Box key={recipe.label}>
              <Recipes onClick={onClick} recipe={recipes} />
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
