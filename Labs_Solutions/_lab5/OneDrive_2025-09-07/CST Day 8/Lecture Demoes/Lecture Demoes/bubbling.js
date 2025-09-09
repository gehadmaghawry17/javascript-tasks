lis = document.querySelectorAll("li")
ul = document.getElementsByTagName("ul")[0]
div = document.querySelector("div")

//for (var i = 0; i <lis. length; i++) {

//    lis[i].addEventListener('click',function(){

//        alert("li clicked")
//    })

//}// li

//ul.addEventListener('click', function (e) {
//    alert("UL clicked")
//    e.stopPropagation();

//})//ul

//div.addEventListener('click', function () {
//    alert("Div clicked")

//})//div



////////////// Capturing 
//for (var i = 0; i < lis.length; i++) {

//    lis[i].addEventListener('click', function () {

//        alert("li clicked")
//    }, true)

//}// li

//ul.addEventListener('click', function (e) {
//    alert("UL clicked")


//},true)//ul

//div.addEventListener('click', function () {
//    alert("Div clicked")

//},true)//div


//for (var i = 0; i < lis.length; i++) {

//    lis[i].addEventListener('click', function () {

//        alert("li clicked")
//    })

//}
//ul.addEventListener('click', function (e) {
//    alert("UL clicked")


//})//ul

//div.addEventListener('click', function () {
//    alert("Div clicked")

//})//div


liobj = document.createElement("li")
liobj.innerText = "NewElm"
ul.appendChild(liobj)


ul.addEventListener('click', function (e) {
    //alert("UL clicked")
   // console.log(e.target)
    console.log(e.target.outerHTML)
    if (e.target.tagName == "LI") {
        alert(e.target.innerText)
    }


})//ul






