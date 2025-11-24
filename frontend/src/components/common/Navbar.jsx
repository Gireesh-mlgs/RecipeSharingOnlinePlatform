import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const address = useLocation();

  const textColor = useColorModeValue("primary-500", "white");
  const bgNonHome = useColorModeValue("white", "gray.800");

  const isHome = address.pathname === "/";

  // Hide navbar on admin page
  if (address.pathname === "/admin") return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
      sx={
        isHome
          ? {
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255, 255, 255, 0.25)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
              transition: "0.3s ease",
            }
          : {
              background: bgNonHome,
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }
      }
    >
      {/* Main Navbar Content */}
      <Flex
        maxW="80rem"
        mx="auto"
        color={textColor}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        background="transparent"
      >
        {/* Mobile Hamburger */}
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Logo + Desktop Nav */}
        <Flex
          flex={{ base: 1 }}
          justifyContent={{
            lg: "space-between",
            md: "space-between",
            base: "flex-end",
          }}
        >
          <Text
            as={Link}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="1px"
            fontFamily="Kaushan Script"
          >
            Recipe
            <Text display="inline" color="primary.500">
              Share
            </Text>
          </Text>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("text", "white");
  const linkHoverColor = useColorModeValue("primary.500", "teal.500");

  return (
    <Flex gap="1rem" alignItems="center">
      <Text
        as={Link}
        to="/explore"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
      >
        Explore
      </Text>

      <Text
        as={Link}
        to="/feed"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
      >
        Feed
      </Text>

      <Text
        as={Link}
        to="/account"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
      >
        Account
      </Text>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      <MobileNavItem label="Explore" href="/explore" />
      <MobileNavItem label="Feed" href="/feed" />
      <MobileNavItem label="Account" href="/account" />
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Text
      py={2}
      as={Link}
      to={href}
      fontWeight={600}
      color={useColorModeValue("primary.500", "white")}
    >
      {label}
    </Text>
  );
};

export default Navbar;
