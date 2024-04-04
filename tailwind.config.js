/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "oxford-blue": "#0E1C36",
                alabaster: "#F1EFE7",
                "sea-green": "#5C946E",
                "sea-green-light": "#9BC0A7",
                vlink: "#8D8253",
            },
            fontFamily: {
                LS: ['"League Spartan"', "sans-serif"],
                MT: ["Montserrat", "sans-serif"],
            },
            fontSize: {
                body: ["1.25rem", { lineHeight: "130%", fontWeight: "400" }],
                "sub-subtitle": ["2.25rem", { fontWeight: "400" }],
                subtitle: ["2.5rem", { fontWeight: "400" }],
                h3: ["1.5rem", { letterSpacing: "0.05em", fontWeight: "600" }],
                h2: ["4rem", { fontWeight: "700" }],
                h1: ["6rem", { fontWeight: "700" }],
                h1lg: ["8rem", { fontWeight: "700"}]
            },
            gridTemplateColumns: {
                12: "repeat(12, auto)",
            },
            gap: {
                20: "1.25rem",
                5: "0.25rem"
            },
            width: {
                "fit-content": "fit-content",
            },
            height: {
                "fit-content": "fit-content",
            },
        },
    },
    plugins: [],
};

