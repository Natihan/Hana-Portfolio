module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Navy blue for headers/buttons
        secondary: "#1E3A8A", // Darker shade for accents
        accent: "#60A5FA", // Lighter blue for hover states
        background: "#F3F4F6", // Light gray for backgrounds
        text: "#111827", // Dark gray for text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Consistent typography
      },
      spacing: {
        128: "32rem", // Extra spacing for large containers
        144: "36rem",
      },
    },
  },
  plugins: [],
};
