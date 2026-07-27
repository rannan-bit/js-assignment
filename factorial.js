function factorial(num){
    let sum=0
    let fact
  if(num==0 || num==1){
    return 1
  }
  else if(num>1){
    for(let i=num;i>1;i--){
      fact=num*factorial(num-1)
      sum+=fact
   }}
    return sum
    
}
console.log(factorial(5));