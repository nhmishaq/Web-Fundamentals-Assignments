

var arrNew=[];
function numbersOnly (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]===typeof "number"){
            arrNew.push(arr[i]);
        }
    }
}

numbersOnly(arr);
console.log(newArr);
console.log(arr);