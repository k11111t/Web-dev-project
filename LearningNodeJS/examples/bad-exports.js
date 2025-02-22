const add = (a,b) => {
    return a+b;
};
const sub= (a,b) => {
	return a-b
}

// DOESNT WORK - will export an empty object
// we assigned a new object instead of adding a property to the object 
// module.exports object
// in the background: exports = module.exports - it is a reference, 
// and we must not break it!
exports = {add, sub} 