import {
  Center,
  Heading,
  Box,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { DietLabels } from "./dietLabels";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "./HealthLabels";
import { Nutrients } from "./Nutrients";

export const RecipeDetails = ({ onClick, choice }) => {
  console.log(choice);

  return (
    <>
      <Center
        bgGradient="linear(to-b, green.100, pink.200)"
        w="100%"
        p={4}
        color="white"
        pt={40}
        pb={40}
        pl={40}
        pr={40}
        borderRadius="50"
      >
        <Box>
          <Heading fontWeight={"450"} color="blue.600" mb={65}>
            {choice.label}
          </Heading>{" "}
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box>
                <Text>{choice.mealType}</Text>
              </Box>
              <Box>
                <Text>{choice.dishType}</Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} colStart={2}>
              <Image
                src={choice.image}
                width={250}
                height={250}
                alt={choice.alt}
                borderRadius="50%"
              />
            </GridItem>
          </Grid>
          <Box>
            <Text>
              <Ingredients choice={choice} />
            </Text>
          </Box>
          <Box>
            <Text>Cooking time: {choice.totalTime} minutes</Text>
          </Box>
          <Box>
            <Text>Servings: {choice.yield}</Text>
          </Box>
          <Box>
            <Text>
              Dietlabels:
              <DietLabels choice={choice} />
            </Text>
          </Box>
          <Box>
            <Text>
              Healthlabels: <HealthLabels choice={choice} />
            </Text>
          </Box>
          <Box>
            <Text>
              <Nutrients choice={choice} />
            </Text>
          </Box>
          <Box>
            <Text>Cautions: {choice.cautions}</Text>
          </Box>{" "}
          <Button
            onClick={() => {
              onClick();
            }}
            bg="blue.600"
            mt={65}
          >
            Go back
          </Button>
        </Box>
      </Center>
    </>
  );
};
