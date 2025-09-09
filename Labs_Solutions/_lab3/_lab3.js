// JavaScript source code
//alert("test")

//window.onload = function () {
//    var text = "welcome to js"
//    var index = 0

//    var popup = window.open("", '_blank', 'width=400,height=300')

//    ////opened child page -- print text letter by letter -- loop over text related to time loaded
//    popup.document.write("<h3 id = 'msg'></h3>")
//    var msg = popup.document.getElementById("msg")
//    var timer = setInterval(function () {
//        //every letter appear with millsecond
//        msg.textContent += text[index]
//        index++;
//        if (index == text.length) {
//            clearInterval(timer)
//            setTimeout(function () {
//                popup.close();
//            },1000)
//        }

//    },200)
    

//}


//-----------------------------------------------------


window.onload = function () {
    var count = 0
    var timer = setInterval(function () {
        count++;
    if (count >=14) {
        clearInterval(timer);
    }
    document.title = count;
    var box = document.createElement("div")
        box.className = "counter-box"
    box.textContent = count;
    document.body.appendChild(box)
}, 1000);
};

var students = [
    { name: "Ali", age: 20, Crs: "CS" },
    { name: "Sara", age: 22, Crs: "Math" },
    { name: "Omar", age: 19, Crs: "Physics" },
    { name: "Laila", age: 21, Crs: "CS" },
    { name: "Hassan", age: 23, Crs: "Engineering" },
    { name: "Mona", age: 20, Crs: "Biology" },
    { name: "Kareem", age: 24, Crs: "Math" },
    { name: "Noor", age: 18, Crs: "CS" }
];

// aaray.filter(function(element ,index,array){})
//map 

//// 1- Display all students
var all_student = students.map(function (student)
{
    return student.name});

document.write("all students :", all_student,"<br>")
//2-find and Search for a student by name and print their details.
function searchByName(students, name) {
    var student = students.find(student => student.name.toLowerCase() === name.toLowerCase())
    if (student) {
        document.write((" Name: " + student.name + "||" + " Age: " + student.age + "||" + " Crs: " + student.Crs + "<br>"))

    } else { document.write("No student") }


}

searchByName(students, "gehad")
document.write("<br>")
searchByName(students, "ali")


//3-Find how many students are in the array(count Students).
document.write("count Students ", students.length, "<br>");

//// 4-Get all students who are in "CS"
document.write("cs students", students.filter(s => s.Crs === "CS").map(s => s.name).join(", "), "<br>");

//// 5-Find youngest student
var youngest = students.reduce((a, b) => a.age < b.age ? a : b);
document.write("youngest student is ", youngest.name + "  =  " + youngest.age, "<br>");

//// 6-Sort Students by age
document.write("Sorted", students.slice().sort((a, b) => a.age - b.age).map(s => s.name).join(", "), "<br>");

//// 7-Create a new array with only student names.
document.write("names", students.map(s => s.name).join(", "), "<br>");

// 8-Check if all students are above age  18 and return true or false
//every return true if all is true
var above18 = students.every(st => st.age > 18)
document.write("Above 18 "+above18)
//// 9-return Students Who Have the Same Crs
function getStudByID(students) {
    var groups = {};
    students.forEach(student => {
        if (!groups[student.Crs]) {
            groups[student.Crs] = [];
        }
        groups[student.Crs].push(student);
    })

var result = [];
for (var res in groups) {
    if (groups[res].length > 1) {
        result.push(groups[res])
    }
    }
    return result;
}
// result 

var STudent = getStudByID(students)
STudent.forEach(group => {
    group.forEach(student => {
        document.write(" Name: " + student.name + "|" + " Age: " + student.age + "|"+ " Crs: " + student.Crs+"<br>")

    })
})

//another traditional way
function getStudByCrs(students) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        for (let j = i + 1; j < students.length; j++) {
            if (students[i].Crs === students[j].Crs) {
                result.push(students[i], students[j]);
            }
        }
    }

    return result;
}
//var result = getStudByCrs(students)
//result.forEach(group => {
//    group.forEach(student => {
//        document.write("ANOTHER WAY"+" Name: " + student.name + "|" + " Age: " + student.age + "|" + " Crs: " + student.Crs + "<br>")

//    })
//})

//document.write("222_Students with same id ", STudent)

//--------

//crs_students = students.filter.function((crs){ 

//    var dept = [];
//    for (var i = students.length - 1; i <= 0; i--)
//    {
//        if (students[i] == -1)
//            dept = students.push(students[-1])

//    }
//    console.log(dept)

//})
//// 10-Calculate the average age of all students.

////11 - Sort and Find top 3 oldest students
document.write("top 3 oldest ", students.slice().sort((a, b) => b.age - a.age).slice(0, 3).map(s => s.name).join(", "), "<br>");

////12-Find if there are students with the same name.
//make group for duplicate ,ask
var dup = {};
var duplicated = false;
for (var stu of students) {
    if (dup[stu.name]) {
        duplicated = true;
        break;
    }
    dup[stu.name]=true
}
console.log(duplicated ? "there is duplication" : "there isnt duplication")
//// 13-Reverse the array without using .reverse().
document.write("Reversed", students.map(s => s.name).reverse().join(", "), "<br>");

//// 14-Add a new property email for each student in the format: name.toLowerCase+"@iti.com"
students.forEach(s => s.email = s.name.toLowerCase() + "@iti.com");
document.write("Emails", students.map(s => s.name + "=" + s.email).join(" || "), "<br>");



///////////////
    