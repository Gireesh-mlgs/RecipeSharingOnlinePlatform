import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
    caption: "Kaushan Script, cursive",
  },
  colors: {
    text: "#1A1A1A",
    background: "#F9FAFB",
    primary: {
      50: "#ffe6faff",
      100: "#FFEDC2",
      200: "#FFE19D",
      300: "#78ffd9ff",
      400: "#508affff",
      500: "#005c70ff",
      600: "#2300e6ff",
      700: "#CC9300",
      800: "#B38300",
      900: "#997200",
    },
    secondary: "#6B6B6B",
    accent: "#FF9E3B",
  },
  styles: {
    global: {
      body: {
        width: "100vw",
        overflowX: "hidden",
        bg: "background",
        color: "text",
        lineHeight: "tall",
      },
      a: {
        color: "primary.500",
        _hover: { textDecoration: "underline", color: "primary.600" },
      },
    },
  },
  components: {
    Input: {
      baseStyle: {
        borderRadius: "md",
        border: "1px solid",
        borderColor: "secondary",
        _focus: {
          borderColor: "primary.500",
          boxShadow: "0 0 0 2px rgba(255, 181, 0, 0.3)",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "md",
        _focus: { boxShadow: "none" },
      },
      sizes: {
        lg: { h: "48px", fontSize: "lg", px: "28px" },
        md: { h: "40px", fontSize: "md", px: "20px" },
        sm: { h: "32px", fontSize: "sm", px: "12px" },
      },
      variants: {
        solid: (props) => ({
          bg: "primary.500",
          color: "background",
          _hover: { bg: "primary.600" },
          _active: { bg: "primary.700" },
        }),
        outline: (props) => ({
          border: `1px solid ${props.theme.colors.primary[500]}`,
          color: "primary.500",
          _hover: { borderColor: "primary.600", bg: "primary.50" },
        }),
        ghost: (props) => ({
          color: "primary.500",
          _hover: { bg: "primary.50" },
        }),
      },
    },
    Heading: {
      baseStyle: {
        color: "text",
        fontWeight: "700",
      },
      sizes: {
        xl: { fontSize: ["4xl", "5xl", "6xl"] },
        lg: { fontSize: ["2xl", "3xl", "4xl"] },
        md: { fontSize: ["lg", "xl", "2xl"] },
        sm: { fontSize: ["md", "lg", "xl"] },
      },
    },
  },
});

export default theme;
