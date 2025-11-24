import React from "react";
import { Box, Image, Text, Flex, Button, Heading } from "@chakra-ui/react";

const InfoCard = ({ title, img, direction = "row", mb = "6rem", screenSize }) => {
  return (
    <Flex
      margin="auto"
      direction={screenSize === "lg" ? direction : "column"}
      width="min(80rem,100%)"
      alignItems="center"
      gap={{ lg: "2rem", base: "3rem" }}
      px={4}
      mb={screenSize === "lg" ? mb : "4rem"}
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      p={{ base: 4, md: 6 }}
      _hover={{
        transform: "scale(1.02)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Left Image Section */}
      <Box
        width={{ lg: "55%", base: "100%" }}
        position="relative"
        mb={screenSize === "lg" ? "0" : "1rem"}
      >
        <Image
          src={img}
          w="100%"
          h="100%"
          alt="Recipe Image"
          objectFit="cover"
          borderRadius="1.5rem"
          boxShadow="2xl"
        />
      </Box>

      {/* Right Text Section */}
      <Box
        width={{ lg: "45%", base: "100%" }}
        textAlign={{
          lg: direction === "row-reverse" ? "left" : "right",
          base: "center",
        }}
      >
        <Heading
          fontFamily="Kaushan Script, cursive"
          fontSize={{ lg: "2xl", md: "xl", base: "lg" }}
          color="teal.500"
          mb="0.5rem"
        >
          About
        </Heading>

        <Heading
          fontWeight="bold"
          lineHeight={1.2}
          mb="1rem"
          color="gray.800"
          maxW={{ lg: "480px", base: "100%" }}
          mx={{ base: "auto", md: "none" }}
          fontSize={{ lg: "2xl", md: "xl", base: "lg" }}
        >
          {title}
        </Heading>

        <Text
          fontSize={{ lg: "md", base: "sm" }}
          color="gray.600"
          maxW={{ lg: "600px", base: "100%" }}
          mb="2rem"
          mx={{ base: "auto", md: "none" }}
        >
          Indulge in a culinary adventure with our delightful recipe. Savor the
          perfect blend of flavors, textures, and aromas that make every bite an
          unforgettable experience. Whether you're a seasoned chef or a novice
          in the kitchen, this dish is easy to prepare and promises a delectable
          outcome.
        </Text>

        <Button
          bg="teal.500"
          color="white"
          px={8}
          py={6}
          borderRadius="full"
          _hover={{ bg: "teal.600", transform: "translateY(-2px)" }}
        >
          Explore More
        </Button>
      </Box>
    </Flex>
  );
};

export default InfoCard;
