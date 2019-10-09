// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

console.log(teach(instructors))
// ---------------------------
// 1. Find largest number
// ---------------------------
 function largest(arr){
     return Math.max(...arr)
 }

console.log(largest(numbers))
// ---------------------------
// 2. Find longest string
// ---------------------------
function length(arr){
    var lngth = 0;
    var longest;
    for(var i =0; i < arr.length; i ++){
        if (arr[i].length > lngth){
            lngth = arr[i].length;
            longest = arr[i]
        }
        
    }
    return longest;
}

console.log(length(strings))
// ---------------------------
// 3. Find even numbers
// ---------------------------

function even(arr){
    var a = []
    for(var i =0; i < arr.length; i ++){
        if (arr[i] % 2 === 0){
            a.push(arr[i])
        }
    }
return a;
}

console.log(even(numbers))
// ---------------------------
// 4. Find odd numbers
// ---------------------------

function odd(arr){
    var a = []
    for(var i =0; i < arr.length; i ++){
        if (arr[i] % 2 === 1){
            a.push(arr[i])
        }
    }
return a;
}

console.log(odd(numbers))
// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function is(arr){
    var a = []
    for(var i =0; i < arr.length; i ++){
        if (arr[i].includes("is")){
            a.push(arr[i])
        }
    }
return a;
}

console.log(is(strings))

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

console.log(numbers.concat(strings));


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

function teach(arr){
    var a = [];
    for(var i =0; i < arr.length; i ++){
        if (arr[i].teaches.includes('JavaScript')){
            a.push(arr[i].firstname);
        }
    }
    return a.sort();
}

