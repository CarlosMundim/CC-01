/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rolls-bordeaux": "#680021",
        "rolls-spice": "#FFFAEC", 
        "rolls-gray": "#939598",
        "rolls-black": "#000000",
        "dark-navy": "#001f3f",
        "luxury-teal": "#008B8B",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out", 
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
