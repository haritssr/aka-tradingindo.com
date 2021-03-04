module.exports = {
    purge: ["./components/*.js", "./pages/*.js", "./pages/productPage/*.js"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            // fontFamily: {
            //   mont: "'Montserrat', sans-serif'",
            // },
            colors: {
                green: {
                    1000: "#5E725B",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
