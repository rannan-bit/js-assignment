function calculateBill(unit){
    if(unit<=100){
        return total=unit*5
    }else if(unit>100 && unit<=200){
        return total=500+((unit-100)*7)
    }else{
        return total=1200+((unit-200)*10)
    }
    
}
console.log(calculateBill(124));
