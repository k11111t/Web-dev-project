//level 1
//1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//2
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

//3
let  { width:w=0, height:h=0, area:a=0, perimeter:p=0 } = rectangle
console.log(w, h, a, p)

//level 2
//1
for(let element of users)
{
    let { name, scores, skills, age } = element
    console.log( name, scores, skills, age )
}

//2
for(let element of users)
{
    let { name, scores, skills, age } = element
    if(skills.length < 2)
        console.log( name )
}

//level 3
//1
for(let element of countries_data)
{
    let {name, capital, languages, population} = element
    console.log(name, capital, languages, population)
}

//2
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 81, 80]]
  ]

function printStudentAttributes(students)
{
    return students.map(element => {
        let [name, skills, [,, jsScores, reactScore]] = element
        console.log(name, skills, jsScores, reactScore)
    })
}
printStudentAttributes(students)

//3
function convertArrayToObject(array)
{
    return array.map(element => {
        let [name, skills, scores] = element
        return ({ ["name"] : name, ["skills"] : skills, ["scores"] : scores })
    })
}
console.log(convertArrayToObject(students))

//4
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

let newStudent = { ...student, skills: 
                    {...student["skills"], 
                    frontEnd: [...student["skills"]["frontEnd"], {["skill"]: "Bootstrap", ["level"]: 8}],
                    backEnd: [...student["skills"]["backEnd"], {["skill"]: "Express", ["level"]: 9}],
                    dataBase: [...student["skills"]["dataBase"], {["skill"]: "SQL", ["level"]: 8}],
                    dataScience: [...student["skills"]["dataScience"], "SQL"],
                    }
                }
console.log(newStudent)