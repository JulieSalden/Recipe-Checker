import { Center, Input, Grid } from "@chakra-ui/react";
import { Recipes } from "./Recipes";
import { data } from "../utils/data";

export const RecipeSearch = (onClick) => {
  return (
    <Center>
      <Input
        fontWeight={"450"}
        color="blue.600"
        placeholder="Search recipe"
      ></Input>
      <Grid>
        {data.hits.recipe.map((recipe) => (
          <Recipes key={recipe.label} onClick={onClick} />
        ))}
      </Grid>
    </Center>
  );
};
