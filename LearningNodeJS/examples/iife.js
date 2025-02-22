// this is how modules work - they use immediately invoked function expressions
(function (msg) {
    const variable = '1'
    console.log(msg, variable)
})('oioi');

(function (msg) {
    const variable = '2'
    console.log(msg, variable)
})('oi');