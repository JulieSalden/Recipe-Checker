import { Center, Input, Grid } from "@chakra-ui/react";
import { Recipes } from "./Recipes";

export const RecipeSearch = (onClick, recipe) => {
  return (
    <Center>
      <Input
        fontWeight={"450"}
        color="blue.600"
        placeholder="Search recipe"
      ></Input>
      <Grid>
        {recipe.map((recipe) => (
          <div key={recipe.name}>
            <Recipes onClick={onClick} />
          </div>
        ))}
      </Grid>
    </Center>
  );
};
