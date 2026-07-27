function largest(num){
    let max=num%10
    let digit
    while(num>0){
        digit=num%10
        if(max>=digit){
            max=max
        }else{
            max=digit
        }
        num=Math.floor(num/10)
    }
    return max
}
console.log(largest(149));
