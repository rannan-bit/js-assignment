// 8. Write a fuction that return the numer of times its called using closure

//      Eg:
//      counter(); // 1
//      counter(); // 2
//      counter(); // 3

function parent(){
    let count=0
    return function(){
        count++
        return count
    }
}

let counter=parent()
console.log(counter());
console.log(counter());
console.log(counter());


