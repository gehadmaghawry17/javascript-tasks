// JavaScript source code
const students = [
    { id: 1, name: "Ali", grade: 80, city: "Cairo" },
    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
    { id: 3, name: "Omar", grade: 74, city: "Giza" },
    { id: 4, name: "Mona", grade: 88, city: "Cairo" }
];

//1 - Create a new array that contains only the names
//of students using arrow functions.

//row function 
const names = students.map(student => student.name)
console.log(names)

//2-Get all students who have a grade greater than or equal to 85.(filter)
const grade85 = students.filter(student => student.grade >= 85)
console.log(grade85)

//3-Find the student whose name is "Sara".
const is_sara = students.find(student => student.name === "Sara")
console.log(is_sara)

//4-Calculate the average grade of all students.(reduce)
const avg = students.reduce((sum, stu) => sum + stu.grade,0) / students.length
console.log(avg)

//5 - Sort students by grade(descending) using arrow function in sort.
const sorted = students.slice().sort((a, b) => b.grade - a.grade)
console.log(sorted)

//6-Print Students using forEach arr fun
students.forEach(student => {
    console.log(`ID:${student.id}, Name: ${student.name}, Grade: ${student.grade},City: ${student.city}`)
});
//7-Make a shallow copy of the students array using spread.
const _Students = [...students];
console.log(_Students);

//8-Add a new student object into the array using spread.
const newStudent = { id: 7, name: "farida", grade: 100, city: "Cairo" }
const newStudents = [...students, newStudent]
console.log(newStudents)

//9-Suppose you have another array of students,
// merge it with the first array using spread
const __Students = [
    { id: 8, name: "Hana", grade: 90, city: "US" },
    { id: 9, name: "mariam", grade: 85, city: "Mansoura" }
];
const _students_9 = [...students, __Students]
console.log(_students_9)


//10- Update "Omar"’s grade to 95 without mutating the original array
//(use spread inside map).
let _newStudents_10 = [];
students.forEach(student => {
    if (student.name === "Omar") { _newStudents_10.push({...student,grade:95 }) }//
    else {
        _newStudents_10.push(student)
    }
})

//11 - Remove the student with id = 2 using filter + spread.
const _students_11 = [...students.filter(student => student.id !== 2)]
console.log(_students_11)
//12 - Take out the first student and keep the rest
//in another array using destructuring + spread

const [firstStu, ...restStu] = students
console.log("first",firstStu)
console.log("rest",restStu)

//13 - destruct and Extract the first student into a variable,
// and keep the rest into another array using rest

const [firstStu_13, ...restStu_13] = students
console.log(firstStu_13)
console.log(restStu_13)

//14 - Skip the first two students and store the third one in a variable.
console.log("14")
const [, , thirdStu] = students
console.log(thirdStu)


//-------------------------------------------

//Assigment 2

//Write a function printNames(...names)
//that accepts any number of student objects
//and prints their name using spread operator .
console.log("Assigment 2")
function print_names(...students) {
    students.forEach(student => console.log(student.name))
}
//print_names({ id: 1, name: "Ali", grade: 80, city: "Cairo" },
//    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
//    { id: 3, name: "Omar", grade: 74, city: "Giza" },
//    { id: 4, name: "Mona", grade: 88, city: "Cairo" })

print_names(...students)
    //------ 
function printNames() {
    console.log("hello from ass 2")
}
//printNames()

function printNames(...students) {
    console.log(students)
}
//call and give it parameters
//printNames({ name: "gehad" }, { name: "sara" })

function printNames(...students) {
    students.forEach(stu => console.log(stu)) // print objects
}

//here print names lazem t call it and give it para
function printNames(...students) {
    students.forEach(stu => console.log(stu.name)) // print objects names 
}

//printNames({ name: "1Ali" }, { name: "2Sara" }, { name: "3Omar" });

//printNames(...students)

//Assi 3

console.log(_let_) //referenceError
let _let_ = 10;
console.log(_let_) 
///////////
console.log(_var_) // undefined
var _var_ = 10;
console.log(_var_) 
///////////////////
console.log(_const_)//referenceError TDZ

const _const_ = 10;
console.log(_const_)

//------
// var _var_=10 // good 
//let _let_ =10  //syntax 
//const _const_ = 11; //syntax 