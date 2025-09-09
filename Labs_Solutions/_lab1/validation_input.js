// JavaScript source code
//validation
//var values =[];
//while (1)
//{
//    _numberOfIterations = prompt("enter number of iterations ")
//           if(_numberOfIterations==""  || _numberOfIterations==null)
//             {continue;}
//           else{


//                if(!isNaN(parseInt(_numberOfIterations)) )
//                {

//                    console.log(parseInt(_numberOfIterations))

//                }


//}
//for(var i =1 ; i<=_numberOfIterations ; i++)
//{


//while(1){
//           val1 = prompt("enter value : " +i)
//           if(val1==""  ||val1==null)
//           { continue;}


//            else{


//                if(!isNaN(parseInt(val1))){

//                    console.log(parseInt(val1))
//                    values.push(val1)

//                }

//                else {
//               console.log(val1)
//               values.push(val1)
//              }
//              break;
//              }

//        }



//====================================================================

var sum = 0;

for (let i = 1; i <= 5; i++) {
    var value;

    while (true) {
        var input = prompt(Enter value ${ i });


        if (input === null) {
            alert("You must enter a number!");
            continue; 
        }


        input = input.trim();
        if (input === "" || Number.isNaN(Number(input))) {
            alert("Invalid input. Please enter a valid number!");
            continue;
        }

        value = parseInt(input);
        sum += value;
        break;
    }
}