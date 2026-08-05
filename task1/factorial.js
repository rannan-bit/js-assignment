function factorial(num){
    let sum=0
  for(let i=1;i<=num;i++){
        let fact=1
    for(let j=1;j<=i;j++){
      fact*=j  
    }
    sum+=fact
  }
  return sum
    
}
console.log(factorial(5));