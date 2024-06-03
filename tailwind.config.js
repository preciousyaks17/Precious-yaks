/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    roboto: "var(--font-roboto)",

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text_color: "var(--text-color)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        navbar_hover: "var(--navbar-hover)",
        navbar_active: "var(--navbar-active)",
        navbar_bg: "var(--navbar-bg)",
        navbar_text: "var(--navbar-text)",
        navbar_gradient: "var(--navbar-gradient)",
      },
    },
  },
  plugins: [],
};
