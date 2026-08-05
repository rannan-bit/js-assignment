//1. find first reccurssive character from the given pattern 
   pattern="ABEBAAD"

for(let i=0;i<pattern.length;i++){
    for(let j=0;j<i;j++){
        if(pattern[i]===pattern[j]){
            console.log("first reccurssive character is:" , pattern[i]);
            i=pattern.length
            break
        }
    }
}