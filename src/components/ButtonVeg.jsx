import { Button } from "@chakra-ui/react";
export const ButtonVeg = ({ onClick }) => {
  return (
    <>
      <Button
        onClick={() => {
          () => onClick(onClick);
        }}
      >
        Vegetarian
      </Button>
    </>
  );
};
