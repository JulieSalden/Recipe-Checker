import { Flex, Input, Grid } from "@chakra-ui/react";
import { Recipes } from "./Recipes";

export const RecipeSearch = ({ onClick, recipe }) => {
  return (
    <Flex direction="column">
      <Input
        fontWeight={"450"}
        color="blue.600"
        placeholder="Search recipe"
      ></Input>
      <Grid templateRows="repeat(2, 1fr)">
        {recipe.map((recipe) => (
          <div key={recipe.label}>
            <Recipes onClick={onClick} recipe={recipe} />
          </div>
        ))}
      </Grid>
    </Flex>
  );
};
