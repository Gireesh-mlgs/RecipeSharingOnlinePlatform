import {
  Card,
  Box,
  CardBody,
  Heading,
  Image,
  Stack,
  Badge,
} from "@chakra-ui/react";

export const Homecard = ({ image, name }) => {
  const time = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
  const serving = Math.floor(Math.random() * 5) + 1;
  const calories = Math.floor(Math.random() * 10) + 10;

  return (
    <Card
      h={{ lg: "180px", base: "auto" }}
      textAlign="left"
      direction={{ base: "column-reverse", sm: "row" }}
      overflow="hidden"
      boxShadow="lg"
      borderRadius="xl"
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
    >
      <CardBody
        width={{ lg: "50%", md: "70%", base: "100%" }}
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
      >
        <Heading mb={2} size="sm" textTransform="uppercase">
          {name}
        </Heading>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Badge colorScheme="green" fontSize="0.75em">
            ⏱ {time} Min
          </Badge>
          <Badge colorScheme="yellow" fontSize="0.75em">
            🍽 {serving} Serving
          </Badge>
          <Badge colorScheme="red" fontSize="0.75em">
            ♨️ {calories * 10} Cal
          </Badge>
        </Stack>
      </CardBody>

      <Box width={{ lg: "50%", md: "70%", base: "100%" }}>
        <Image
          objectFit="cover"
          width="100%"
          height="100%"
          minH="100px"
          src={image}
          borderRadius={{ base: "0 0 xl xl", lg: "0 xl xl 0" }}
        />
      </Box>
    </Card>
  );
};
