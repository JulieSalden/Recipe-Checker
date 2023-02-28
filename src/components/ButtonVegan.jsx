import { Button } from "@chakra-ui/react";
export const ButtonVegan = ({ onClick, VeganDish }) => {
  console.log(healthLabels);

  return (
    <>
      <Button onClick={() => onClick(VeganDish)}>Vegan</Button>
    </>
  );
};
