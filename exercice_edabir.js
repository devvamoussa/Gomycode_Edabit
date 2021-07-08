

//addition
function addition(a, b) {
	return a+b
}



//countTrue
function countTrue(arr) {
	var comp=0
	for(i= 0 ; i<arr.length ; i++){
		// get element of array
		var element=arr[i]
		
		// verify is element is True
		if (element===true){
			// increase comp
			comp+=1
		}
	}
	
	// return
	return comp
}




//filterArray
function filterArray(arr) {
	for(var i = 0;i<arr.length; i++){
        if(typeof arr[i]=="string"){
            arr.splice(i, 1);
            i= i-1
        };
        
	}
	return arr;
}




//getAbsSum
function getAbsSum(arr) {
    var somm=[]
    var length = arr.length

    for(i= 0 ; i<length ; i++){
        
        // abs number
        var element_abs = Math.abs(arr[i])
        somm += element_abs
    }
   return somm
}
console.log(getAbsSum([1 , 2 , 6 ,7]))


 
//getBudgets en cours de traitement 
function getBudgets(arr) {

	var somm=0
	 Object.prototype.length = function(arr)
   {
	 var i = 0;
	 for ( element in arr ) i++;{
		 budget=arr[element]
		 max.push(budget)
			//color_val = inks[color]
	   //page_by_color.push(color_val)
	   var max = Math.max.apply(Math, arr[i]);
	
	 }
	 ;
	 console.log(max)
	 //bud_max=Math.min.apply(Math ,somm)
	 //number_page_printer = Math.min.apply(Math, page_by_color)
	   //console.log(number_page_printer)
	 //return number_page_printer
	 return somm;
   }
	 //var lis=[]
   
	   //for(budget in arr){
   
		   // get key and value 
		  // var bugget=arr
		  // var value_bugget=arr[bugget]
   
		   // push in list
		   //lis.push([value_bugget])
		   
	   }
	  // console.log(arr)
	  
	  
	   //return lis
     getBudgets([
	   { name: "John", age: 21, budget: 23000 },
	   { name: "Steve",  age: 32, budget: 40000 },
	   { name: "Martin",  age: 16, budget: 2700 }
	 ])
	 
	 getBudgets([
	   { name: "John",  age: 21, budget: 29000 },
	   { name: "Steve",  age: 32, budget: 32000 },
	   { name: "Martin",  age: 16, budget: 1600 }
	 ])

	 //hello  edabit

	 function hello() {
		return("hello edabit.com")
	}




//inklevels
function inkLevels(inks) {
	var page_by_color = []
	
	for (color in inks){
		color_val = inks[color]
		page_by_color.push(color_val)
	}
	number_page_printer = Math.min.apply(Math, page_by_color)
    console.log(number_page_printer)
	return number_page_printer
}
   

var printer_1 = {
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}

var printer_2 = {
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
}



//isSameNum
function isSameNum(num1, num2) {
	if(num1===num2){
		return true
	}else{
		return false
	}
	
	
}



//objectToArray
function objectToArray(obj) {
    var lis=[]

	for(objet in obj){

        // get key and value 
        var key_obj=objet
        var value_obj=obj[key_obj]

        // push in list
        lis.push([value_obj])
    }

    console.log(lis)
    return lis
}

objectToArray({
    D: 1,
    B: 2,
    C: 3
  })
  
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })