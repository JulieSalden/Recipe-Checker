import { Button } from "@chakra-ui/react";

export const ButtonVegan = ({ onClick }) => {
  return (
    <>
      <Button
        onClick={() => {
          () => onClick(onClick);
        }}
      >
        Vegan
      </Button>
    </>
  );
};
