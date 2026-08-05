//2. Display number count 
   arr=[10,20,0,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
   
   let count={}
   for(let i=0;i<arr.length;i++){
      if(count[arr[i]]){
         count[arr[i]]++
      }else{
         count[arr[i]]=1
      }
   }
   console.log(count);
   