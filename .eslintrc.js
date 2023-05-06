module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["mobx"],
    extend:["plugin:mobx/recommended", "react-app","react-app/jest"],
    rules: {
        "mobx/missing-observer" : "off"
    }
}