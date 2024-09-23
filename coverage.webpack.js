module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["babel-plugin-istanbul"],
                    },
                },
                enforce: "post",
                include: require("path").join(__dirname, "src"),
                exclude: [/node_modules/, /(ngfactory|ngstyle)\.js/],
            },
        ],
    },
};
