import { Center, Box, Grid, Flex, Heading, Button } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";
import { Searchbar } from "../components/Searchbar";

export const RecipesPage = ({}) => {
  const recipes = data.hits;

  // array zodat we niet telkens recipe.recipe hoeven te gebruiken
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  // usestate om te bepalen welk component zichtbaar is gekozen door
  // recept aanklikken of niet door gebruiker
  const [userChoice, setUserChoice] = useState();

  // usestate om te bepalen welke recepten zichtbaar zijn op basis van knoppen
  const [filteredRecipes, setFilteredRecipes] = useState(recipe);

  // filterknoppen vega vegan en show all
  const filterVegetarianRecipes = () => {
    const vegetarianRecipes = recipe.filter((recipe) => {
      return recipe.healthLabels.includes("Vegetarian");
    });
    setFilteredRecipes(vegetarianRecipes);
  };

  const filterVeganRecipes = () => {
    const veganRecipes = recipe.filter((recipe) => {
      return recipe.healthLabels.includes("Vegan");
    });
    setFilteredRecipes(veganRecipes);
  };

  const resetFilters = () => {
    setFilteredRecipes(recipe);
  };

  return (
    <Center flexDir="column" bg="white">
      <Center
        width="100%"
        height={60}
        mb={{ base: "50px", md: "100px", lg: "100px" }}
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
            <Flex
              direction="column"
              flexWrap="wrap"
              align="center"
              justify="center"
            >
              <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                <Searchbar
                  setFilteredRecipes={setFilteredRecipes}
                  recipe={recipe}
                />
                <Flex
                  direction={{ base: "column", md: "column", lg: "row" }}
                  gap={2}
                  align="center"
                  mb={{ base: "50px", md: "100px", lg: "100px" }}
                >
                  <Button onClick={filterVegetarianRecipes} w={40}>
                    Vegetarian
                  </Button>
                  <Button onClick={filterVeganRecipes} w={40}>
                    Vegan
                  </Button>
                  <Button onClick={resetFilters} w={40}>
                    Show All
                  </Button>
                </Flex>
              </Flex>
            </Flex>

            <RecipeSearch onClick={setUserChoice} recipe={filteredRecipes} />
          </>
        )}
      </Box>
    </Center>
  );
};
