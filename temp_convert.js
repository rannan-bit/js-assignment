function convertTemperature(value,choice){
    let f
    let c
    switch(choice){
        case 1:
            f=(((9/5)*value)+32)
            console.log("Tempearature:" ,f+" degreeCelsius");
            
            break
        
        case 2:
            c=(5/9)*(value-32)
            console.log("Temperature:" ,c+" degreeFarhrenheit");
            
            break
    }
}
convertTemperature(50,2)