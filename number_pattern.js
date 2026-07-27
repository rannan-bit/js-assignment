const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the number:")
for(let i=1;i<=num;i++){
    let pattern=""
    for(let j=1;j<=i;j++){
        pattern+=j+" "
    }console.log(pattern);
    
}