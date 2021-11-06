// function multiplyall (arr) {
//  var product =1;

//  for (var i =0; i < arr.length; i++) {
//  for (var j=0; j < arr[i].length; j++) {
//      product *=  arr[i] [j];
//  }
//  }
//  return product;
// }
// var product = multiplyall([[1,2],[3,4]]);
// console.log(product);
 
// function multiplyElementsOfSingleDImensionArray (arr) {
//  var product =1;

//  for (var i= 0; i<arr.length;i ++) {
//      product *=arr[i];
//  }
//  return product;
// }
 //var product = multiplyElementsOfSingleDImensionArray([3,4]);
   
 //console.log(product);

//  function addElementsOfSingleDimensionArray (arr) {
//      var sum = 0;
//      for (var i= 0; i<arr.length;i ++) {
//          sum +=arr[i];
//      }
//      return sum;
//  }
 //var sum = addElementsOfSingleDimensionArray([10,20,45]);
 //console.log(sum);

//  function multiplyElementsOfMultiDimensionalArray (arr) {
//      var product = 1;
//      for (var i= 0; i<arr. length;i ++) {
//      for (var j=0; j<arr[i].length;j ++) {
//         product *=arr[i] [j] ;

//          }
//      }
       
     
     
//      return product;
//  }
 //var product = multiplyElementsOfMultiDimensionalArray([[1,2,3],[4,5,6],[7],[8]]);
 //console.log(product);

//  

//console.log("Hello World");
var age = 18;
console.log((age >= 18) ? "you can vote" :"you cant vote");

var area = "circle";
var PI = 3.142, l =5, b =4, r =3;
switch(area){
    case 'circle' :
        console.log("the area of the circle is : " + PI*r**2);
    case 'triangle' :
        console.log("the area of the triangle is : " + (l*b)/2);    
        default:
            console.log("please enter a valid data");    
}


 
