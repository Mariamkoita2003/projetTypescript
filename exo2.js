function add(a, b) {
    return a + b;
}
function greet(name) {
    if (name === void 0) { name = "Mariam"; }
    return "Bonjour ".concat(name);
}
console.log(add(2, 5));
console.log(greet("Bonjour Mariam"));
