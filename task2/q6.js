// 6. Remove duplicates from a number array using reduce() function.
let num=[10, 20, 10, 30, 20, 40, 50, 40]
let result = num.reduce((a,b)=>{
    if(!a.includes(b)){
        a.push(b)
    }
    return a
}, [])
console.log(result);
