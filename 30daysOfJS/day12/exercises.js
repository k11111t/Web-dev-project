//level 1
//1
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
function calculateAnnualSalary(text)
{
    const sentencePattern = /[a-zA-Z0-9 ]*[.,]/g
    const sentences = text.match(sentencePattern)
    console.log(sentences)

    let annualIncome = 0
    for(let sentence of sentences)
    {
        const digitPatttern = /[0-9]+/
        const monthPeriodPattern = /[mM]onth/
        const annaulPeriodPattern = /[Aa]nnual/

        const digit = sentence.match(digitPatttern)
        const monthly = monthPeriodPattern.test(sentence)
        const annual = annaulPeriodPattern.test(sentence)
        
        console.log(digit, monthly, annual)

        annualIncome += parseFloat(digit) * (monthly ? 12 : annual ? 1 : 0)
    }
    return annualIncome
}
console.log("annual income: ", calculateAnnualSalary(text))


//2
const text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. "
const numberPattern = /[-]?[0-9]+/g
const numberMatches = text2.match(numberPattern)
const sortedNumbers = numberMatches.map(element => {
    return parseFloat(element)
}).sort((a,b) => {
    if(a < b) return -1
    if(a > b) return 1
    return 0
})
console.log("longest distance", Math.abs(sortedNumbers[0] - sortedNumbers[sortedNumbers.length-1]))

//3
function is_valid_variable(str)
{
    const pattern = /(^[a-zA-Z$_])([a-zA-Z0-9$_]*$)/
    return pattern.test(str)
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

//level 2
//1
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(str, topN)
{
    const pattern = /\b\w+\b/g
    const words = str.match(pattern)
    let countingArray = []
    for(let element of Object.entries(
            words.map(element => {
                return element.toLowerCase()
            }).reduce((acc, element) => {
                acc[element] = (acc[element] || 0) + 1
                return acc
            }, {}))
        )
    {
        countingArray.push({["word"]:element[0], ["count"]:element[1]})
    }
    return countingArray.sort((e1, e2) => {
        if(e1["count"] < e2["count"]) return 1
        if(e1["count"] > e2["count"]) return -1
        return 0
    }).filter((e, i, a) => {
        return i < topN
    })
}
console.log(tenMostFrequentWords(paragraph, 10))

//level 3
//1
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence)
{
    const pattern = /[%$@&#;]/g
    return sentence.replace(pattern, '')
}
console.log(cleanText(sentence))
console.log(tenMostFrequentWords(cleanText(sentence), 10))
