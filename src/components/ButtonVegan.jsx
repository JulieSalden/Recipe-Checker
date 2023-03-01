import { Button } from "@chakra-ui/react";
export const ButtonVegan = ({ onClick, veganRecipes }) => {
  return (
    <>
      <Button
        onClick={() => {
          () => onClick(veganRecipes);
        }}
      >
        Vegan
      </Button>
    </>
  );
};
