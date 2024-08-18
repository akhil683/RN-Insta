export const lightTheme = {
  colors: {
    background: "white",
    text: "black",
    accent: "#D4D4D4",
    accentText: "gray",
  },
};

export const darkTheme = {
  colors: {
    background: "black",
    text: "white",
    accent: "#333",
    accentText: "#999",
  },
};

export type Theme = typeof lightTheme; // Define the Theme type
