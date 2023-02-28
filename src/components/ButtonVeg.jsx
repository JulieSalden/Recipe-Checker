import { Button } from "@chakra-ui/react";
export const ButtonVeg = ({ onClick, VegetarianDish }) => {
  return (
    <>
      <Button onClick={() => onClick(VegetarianDish)}>Vegetarian</Button>
    </>
  );
};
