// 1
const add = (a,b) => {
    return a+b;
};
module.exports = add

// 2
module.exports = (a,b) => {
    return a+b;
};

// 3 - multiple exports
const sub= (a,b) => {
	return a-b
}
// they key names are going to be the same as variable names
module.exports = {add, sub} 

// when we import the module, we import an object

// 4 - multiple exports
module.exports.add = (a,b) => {
    return a+b;
};
module.exports.sub= (a,b) => {
	return a-b
}

// 5 - NOT RECOMMENDED
exports = sub