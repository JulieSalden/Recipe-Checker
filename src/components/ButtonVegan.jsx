import { Button } from "@chakra-ui/react";
export const ButtonVegan = ({ onClick, healthLabels }) => {
  console.log(healthLabels);

  return (
    <>
      <Button
        onClick={() => {
          vegetarianDish;
        }}
      >
        Vegan
      </Button>
    </>
  );
};
