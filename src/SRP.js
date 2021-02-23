//Obviously you wouldn't write functions just for basic addition,
//but for the purpose of example pretend add and multiply are complex mathematical functions
//Notice how in the bad function it combines two separate operations, while in the good example each function is dedicated to one task

//Bad
function addAndMultiply(a, b, c){
    return (a+b)*c;
}

//Good
function goodAddAndMultiply(a, b, c){
    return multiply(add(a,b), c);
}

function add(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}
module.exports = {
    goodAddAndMultiply,
    addAndMultiply
}