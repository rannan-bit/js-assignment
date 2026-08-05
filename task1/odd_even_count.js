const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the number")
even=0
odd=0
for(let i=1;i<=num;i++){
    if(i%2==0){
        even++
    }else{
        odd++
    }console.log(i);
}
console.log(`even count: ${even}`);
console.log(`odd count: ${odd}`);
