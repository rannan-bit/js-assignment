// 7. Convert [apple,orange,apple,banana,orange] to {apple:2,orange:2,banana:2 } using reduce
let arr=["apple","orange","apple","banana","orange"]
let result=arr.reduce((a,b)=>{
    if(a[b]){
        a[b]++
    }else{
        a[b]=1
    }
    return a
}, [])
console.log(result);
