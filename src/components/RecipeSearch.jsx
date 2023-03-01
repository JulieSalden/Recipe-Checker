import { Flex, Input, Grid, Box, Heading, Button } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { ButtonVeg } from "./ButtonVeg";
import { ButtonVegan } from "./ButtonVegan";
import { Searchbar } from "./Searchbar";

export const RecipeSearch = ({ onClick, onChange, recipe }) => {
  console.log(recipe);
  // alle recipes waarbij vegan of vega in healthlabels staat, terug geven
  // healthlabels nodig V en bijbehorende recept dus label.

  const healthLabels = recipe.map((recipe) => {
    return recipe.healthLabels;
  });
  console.log(healthLabels);

  const veganlabels = healthLabels.map((healthlabel) => {
    return healthlabel.filter((healthLabel) => {
      return healthLabel === "Vegan";
    });
  });

  console.log(veganlabels);

  const vegetarianlabels = healthLabels.map((healthlabel) => {
    return healthlabel.filter((healthLabel) => {
      return healthLabel === "Vegetarian";
    });
  });

  console.log(vegetarianlabels);

  // for (var i = 0; recipe.length; i++) {
  //   for (var x = 0; veganlabels.lenght; x++) {
  //     if (recipe[i] === veganlabels[x]) {
  //       console.log(recipe[i]);
  //     }
  //   }
  // } <---- DIT IS NIET DE MANIER WANT LOCAL HOST CRASHT HIERDOOR?

  return (
    <Box h="calc(100vh)">
      <Flex direction="column" flexWrap="wrap" align="center">
        <Heading mb={20} mt={20} size="2xl" color="blue.700" as="i">
          Recipe checker
        </Heading>
        <Flex gridTemplateRows="repeat(3, 1fr)" gap={2}>
          <Searchbar onchange={onChange} recipe={recipe} />
          {/* <ButtonVeg onClick={onClick} recipe={recipe} />
          <ButtonVegan onClick={onClick} recipe={recipe} /> */}
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
