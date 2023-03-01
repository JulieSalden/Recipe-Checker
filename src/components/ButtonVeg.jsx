import { Button } from "@chakra-ui/react";
export const ButtonVeg = ({ onClick, vegetarianRecipes }) => {
  return (
    <>
      <Button onClick={() => onClick(vegetarianRecipes)}>Vegetarian</Button>
    </>
  );
};
