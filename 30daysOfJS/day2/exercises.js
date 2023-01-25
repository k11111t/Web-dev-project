//exercise level 2

let challenge = '30 Days Of JavaScript'

console.log(challenge)

console.log("length of the string: ", challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3, challenge.length))

console.log(challenge.replace("Days Of JavaScript", " "))

console.log(challenge.split(""))

console.log(challenge.split(" "))

let string_ = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string_.split(","))

console.log(challenge.replace("JavaScript", "Python"))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'))

console.log(sentence.lastIndexOf('because'))

console.log(sentence.search('because'))

console.log(' 30 Days Of JavaScript '.trim())

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('t'))

console.log(challenge.match(/a/gi))

console.log('30 Days of'.concat(' ', 'JavaScript'))

console.log(challenge.repeat(2))

//exercise level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

console.log(parseInt('10') == 10)

console.log(Math.ceil(parseFloat('9.8')) == 10)

console.log('python'.indexOf('on') != -1 && 'jargon'.indexOf('on') != -1)

console.log('I hope this course is not full of jargon.'.indexOf('jargon') != -1)

console.log(Math.floor(Math.random() * 101))

console.log(Math.floor(Math.random() * 51) + 50)

console.log(Math.floor(Math.random() * 256))

let javascript = 'JavaScript'
console.log(javascript.charAt(Math.floor(Math.random() * javascript.length )))

console.log(
"1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125")

console.log(sentence.substring(0, sentence.indexOf('because') ).concat(sentence.substring(sentence.lastIndexOf('because') + 'because'.length, sentence.length )))

//exercise level 3

let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSentence.match(/love/gi).length)

let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.match(/because/g).length)

//most frequent word
const longSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let processedLongSentenceList = longSentence.replace(/(\%|\$|\@|\#|\;|\&)/g, "").split(" ")
console.log(processedLongSentenceList)
let wordCount = {}
for(let i=0; i < processedLongSentenceList.length; i++)
{
    wordCount[processedLongSentenceList[i]] = (wordCount[processedLongSentenceList[i]] || 0) + 1
}
const frequencyArr = Object.keys(wordCount).map(key => [key, wordCount[key]]);
console.log(frequencyArr)
frequencyArr.sort((a, b) => b[1] - a[1]);
console.log(frequencyArr[0][0])

//total annua income of a person
const incomeSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annualIncome = 0
incomeSentence.split(",").forEach( a => {
if(a.match("per month")){
    annualIncome += 12 * parseInt(a.match(/\d+/g))
}
else if(a.match("annual")){
    annualIncome += parseInt(a.match(/\d+/g))
}
})
console.log(annualIncome)