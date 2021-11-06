// function addElements (array) {
// var sum = 0;
// for (var i= 0; i<array.length;i ++){
//     for (var j= 0; j<array[i].length;j ++){
//         sum +=array[i][j];
//     }
// }
// return sum;
// }
// var sum = addElements ([[2,1],[1],[1,2]]);
// console.log(sum);

function multiplyElements (array) {
    var prod = 1;
    for (var i= 0; i<array.length;i ++){
        if( typeof array[i] ==='number'){
            prod*=array[i];
        }
        
        for (var j= 0; j<array[i].length;j ++){
            if( typeof array[i][j] ==='number'){
                prod*=array[i][j];
            }
            for (var k=0; k<array[i][j].length;k ++){
                
                if(array[i][j][k] != undefined){
                     prod *=array[i][j][k];
                }
        }
        }
    }
    return prod;
    }
    var prod = multiplyElements ([2,[2,[2,2]],[1],[1,2]]);
    console.log(prod);