// JavaScript source code
// write js code to print data from array as even indexes will be printed with
//style different than odd ones 
document.querySelector("a").addEventListener("click", function (event) {
    event.preventDefault();
    window.open(this.href, "_blank");

})
var para = document.querySelectorAll("p")
para.forEach((para, index) => {
    console.log("Paragraph " + (index + 1) + " : " + para.innerText)
    if (index % 2 === 0) {
        para.style.color = "blue";
        para.style.fontWeight = "bold";
    } else {
        para.style.color = "green";
    }
    
});

//note gehad queryselector =>return collection Nodelist we can use forEach
// getElement => return html collection we can use only for
// js cant open out page bmzagha 34an code yrun lazem imgs in body.html
// lw another page like elzero -- lazem t open it -- using BOM browser object Model
//
//having dropdown Menu containing IDs for array of Objects for Students
//where selecting id
//Display student data in div

var students = [
    { id: 1, name: "ahmed", age: 20, grade: "A" },
    { id: 2, name: "farida", age: 21, grade: "B" },
    { id: 3, name: "mohamed", age: 19, grade: "A+" },
    { id: 4, name: "gehad", age: 19, grade: "A+" },
    { id: 5, name: "hala", age: 23, grade: "A+" }

]

var dropdown = document.getElementById("studentDropdown");
var data = document.getElementById("studentData");
dropdown.innerHTML = '<option value="">choose ID </option>'

students.forEach(student => {
    var option = document.createElement("option")
    option.value = student.id;
    option.textContent = student.id
    dropdown.appendChild(option)


dropdown.addEventListener("change", function () {
    var selected_id = parseInt(this.value);
    var student = students.find(st => st.id === selected_id);

    if (student) {
        data.innerHTML = `
            <strong>ID :</strong> ${student.id} <br>
            <strong>Name :</strong> ${student.name} <br>
            <strong>Age :</strong> ${student.age} <br>
            <strong>Grade :</strong> ${student.grade}
        `;
    } else {
        data.textContent = ""
    }

});

});



//////////3

var img_obj = document.querySelector("img")
var next = document.querySelector("#next")
var prev = document.querySelector("#prev")
var slide = document.querySelector("#slide")
var stop = document.querySelector("#stop")


var counter = 1
var timer;
//NEXT
next.addEventListener('click', function () {
    counter++;
    if (counter == 7)
        counter = 1
    img_obj.src = "images/" + counter + ".png"

})
//prev
prev.addEventListener('click', function () {
    counter--;
    if (counter == 0)
        counter = 6
    img_obj.src = "images/" + counter + ".png"

})
//slide auto
slide.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(function () {
        counter++
        if (counter == 7)
            counter = 1
        img_obj.src = "images/" + counter + ".png"
    },2000)
})


//stop
stop.addEventListener('click', function (){

    clearInterval(timer)
})

/////////////////////////////// part 1 of task 
var img = document.getElementsByTagName("img")

console.log("image ", img)

var imgs = document.querySelectorAll("img")

console.log("images ", imgs)

var cities = document.getElementsByName("City")[0]
console.log(cities.options)

window.onload = function () {
    var city = document.querySelector("select[name='City']")
    if (city) {
        var options = city.options
        for (var i = 0; i < options.length; i++) {
            console.log(options[i].value, "----", options[i].text)
        }
    } else {
        console.log("no element")
    }
}
// c - find all rows for second table
var rows = document.getElementsByClassName("bPink")
console.log(rows);


//d - find all elements that contain class namee fontBlue
var fotblue_elements = document.getElementsByClassName("fontBlue")
console.log(fotblue_elements)
console.log(fotblue_elements[0])

//---------------------------
//a- Get first anchor inside the second table then change href + text
var _table_2 = document.getElementsByTagName("table")[1]
var _first_anchor = _table_2.querySelector("a")

_first_anchor.href = "http://training.com"
_first_anchor.textContent = "Training"

//b- Find last image and change its borders
var _images = document.querySelectorAll("img")
var _last_img = _images[_images.length - 1]
_last_img.style.border = "2px solid pink"
//d- Find element with id example and change background color

var element_d = document.getElementById("example")
element_d.style.background = "pink"

////