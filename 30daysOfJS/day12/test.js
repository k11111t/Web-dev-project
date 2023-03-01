const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
console.log(matches)

const txt1 = 'This regular expression example was made in December 6,  2019.'
const pattern1 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches1 = txt.match(pattern1)
console.log(matches1)