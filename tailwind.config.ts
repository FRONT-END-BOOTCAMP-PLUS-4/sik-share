module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // 필요한 경로 추가
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        warning: "var(--warning)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
