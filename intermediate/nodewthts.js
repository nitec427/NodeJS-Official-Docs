function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: "justine",
    age: 23
};
console.log(window);
var isjustineAdult = isAdult(justine);
console.log(isjustineAdult);
