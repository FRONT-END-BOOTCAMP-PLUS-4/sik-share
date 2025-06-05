module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        warning: "var(--warning)",
        orange: "var(--orange)",
      },
    },
    screens: {
      xs: "400px",
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
