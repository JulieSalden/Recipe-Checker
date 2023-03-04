import { Button } from "@chakra-ui/react";
export const ButtonVeg = ({ onClick, vegetarianRecipes }) => {
  const filterVegetarianRecipes = (vegetarianRecipes) => {
    setFilteredRecipes(vegetarianRecipes);
  };

  // WAT MOET IK HIER DOEN OM DE RECIPES OP HET SCHERM TE KRIJGEN?

  return (
    <>
      <Button
        onClick={() => {
          () => onClick(filterVegetarianRecipes);
        }}
        vegetarianrecipes={vegetarianRecipes}
      >
        Vegetarian
      </Button>
    </>
  );
};
