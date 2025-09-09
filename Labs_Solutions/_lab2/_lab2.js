////validation



var values =[];
while (1)
{
    _numberOfIterations = prompt("enter number of iterations ")
    if (_numberOfIterations == "" || _numberOfIterations == null || _numberOfIterations < 0 || isNaN(_numberOfIterations) == true)
            {continue;}
          else{


                if(!isNaN(parseInt(_numberOfIterations)) )
                {

                    console.log(parseInt(_numberOfIterations))

                }


}
for(var i =1 ; i<=_numberOfIterations ; i++)
{


while(1){
           val1 = prompt("enter value : " +i)
           if(val1==""  ||val1==null)
           { continue;}


            else{


               if (!isNaN(parseInt(val1))) {

                   console.log(parseInt(val1))
                   values.push(val1)

               }

               

            
                else {
               console.log(val1)
               values.push(val1)
               }

              break;
              }

        }

}

break;
}

for (var i = 0; i < values.length; i++) {
    for (var j = i + 1; j < values.length; j++) {
        if (values[i] == values[j]) {
            values.splice(j, 1)
            j--;
        }
    }
}


console.log("Final Array :"+ values);

 //sort
       values.sort(function (a,b) {
          if (a > b)
              return 1;
          else if (a < b)
              return -1;
          else
              return 0;

       });

console.log("Final Sorted Array: "+ values);

//3 call back
let res = [];
let filtered_array =values.filter(values=>values>50)

console.log("Final Filtered Array : "+ filtered_array);
// user defined
console.log("min : "+ values[0] );
reversed_values = values.reverse()
console.log("max : "+ reversed_values[0] )
//questions between 1 to 10
var random_Q = Math.floor(Math.random() * 11)
console.log("Random question is  " + random_Q)
///
function get_randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

var randomQ_2 = get_randomInt(1, 10)
console.log("Second way Random question is  " + randomQ_2)

//2
function multiply (values)
{
    product_res = 1

    for(var j =0; j<values.length ; j++)
    {
        product_res *= values[j]
    }
    return product_res
}

var _product = values.join("*")
var _sum = values.join("+")

var _sum2 = eval(values.join("+"))
var _product2 = eval(values.join("*"))


var res_product = eval(_product)
console.log("Product : "+ res_product )


var res_sum = eval(_sum)
console.log("Sum  : "+ res_sum )

//using reduce product & sum video eng naser
var res_sum_reduce = values.reduce(function (p, c) { return p += c; });
console.log(res_sum_reduce);

var res_mult_reduce = values.reduce(function (p, c) { return p *= c; }, 1);
console.log(res_mult_reduce);

console.log("--------------------------------" )

//----------PART 2 ---------------------------------
_input_ = prompt("Enter statment : ") //good evening gehad
var _input_splitted = _input_.split(" ") // 0=>good , 1=>evening , 2=>gehad

var _word = [];// = _input_splitted

for(var j =0 ;j<_input_splitted.length ; j++)
{
    var _current_word= _input_splitted[j]
    var new_word = _current_word.charAt(0).toUpperCase()+_current_word.slice(1)
    _word.push(new_word)


}

console.log("statement: " + _word.join(" "));
///wrong way

    //if (_input_splitted[j][0] == _input_splitted[j][0].toLowerCase()) //=> 0,0  1,0  2,0 
    //{ final_input[j][0] = _input_splitted[j][0].toUpperCase()} 
    //else 
    //    break;
        

//Longest withn string
_input_ = prompt("Enter statment : ") //good evening gehad
var _input_splitted = _input_.split(" ") // 0=>good , 1=>evening , 2=>gehad

var _longest_word = _input_splitted[0]; // max = arr[0] => max <arr[j] => max = arr[j]

for (var j = 0; j < _input_splitted.length; j++) //loop for every word
{

    if (_input_splitted[j].length > _longest_word.length)
        _longest_word = _input_splitted[j]



}

console.log("longest statement: " + _longest_word);
