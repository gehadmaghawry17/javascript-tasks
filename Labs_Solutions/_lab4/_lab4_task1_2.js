// JavaScript source code
//window.onload = function () {
//    var images = document.querySelectorAll("img")
//    images.forEach((img, index) => {
//        console.log("image " + (index+1)+" : " + img.src)
//    })

//}
var img = document.getElementsByTagName("img")

console.log("image ", img)

var imgs = document.querySelectorAll("img")

console.log("images ", imgs)

var cities = document.getElementsByName("City")[0]
console.log(cities.options)

window.onload = function(){ 
var city = document.querySelector("select[name='City']")
    if (city) {
        var options = city.options
        for (var i = 0; i < options.length; i++) {
            console.log(options[i].value,"----", options[i].text)
        }
    } else {
        console.log("no element")
    }
}
// c - find all rows for second table
var rows = document.getElementsByClassName("bPink")
console.log( rows);


//d - find all elements that contain class namee fontBlue
var fotblue_elements = document.getElementsByClassName("fontBlue")
console.log(fotblue_elements)
console.log(fotblue_elements[0])

//---------------------------
//a- Get first anchor inside the second table then change href + text
var _table_2 = document.getElementsByTagName("table")[1]
var _first_anchor = _table_2.querySelector("a")

_first_anchor.href = "http://training.com"
_first_anchor.textContent="Training"

//b- Find last image and change its borders
var _images = document.querySelectorAll("img")
var _last_img = _images[_images.length - 1]
_last_img.style.border="2px solid pink"
//d- Find element with id example and change background color

var element_d = document.getElementById("example")
element_d.style.background = "pink"


