const prompt=require('prompt-sync')({sigint:true})
let num=prompt("Enter the number:")
while(num>1){
    if((num+1)%1==0 && (num+1)%(num+1)==0){
        console.log(num+1);
        
    }else{
        num++
    }
}