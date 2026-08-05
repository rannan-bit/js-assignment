// 5. Ramu's Card Stack Game!

//       Ramu is playing a card game where he places cards on top of a pile and 
//       sometimes removes the top card.
//       You are given a list of moves:
//         • "place ‹card›" means Ramu places a card (like "Ace", "King", "Queen") on 
//            top of the pile.
//         • "remove" means Ramu removes the top card from the pile.
//         • If the pile is empty and a "remove" move happens, ignore it.
//       Your task:
//         After all moves, return the name of the card currently on top of the pile.
//         If the pile is empty, return "No cards left".
//            Examples:
//              moves1 = ["pLace Ace", "place King", "remove", "place Queen"]
//              Pile flow: ["Ace"] -> ["Ace", "King"] -> remove top ("King") -> ["Ace","Queen"]
//              Output: "Queen"
            
//              moves2 = ["remove","place Jack", "remove", "remove"]
//              Pile flow: [] -> ["Jack"] -> remove top ("Jack") -> remove ignored (empty)
//              Output:"No cards left"

let moves=["pLace Ace", "place King", "remove", "place Queen"]
let stack=[]
moves.forEach((a)=>{
    if(a.startsWith("place")){
        let card=a.split(" ")[1]
        stack.push(card)
    }else if(a==="remove"){
        if(stack.length>0){
            stack.pop()
        }
    }
})
if(stack.length>0){
    console.log(stack[stack.length-1]);
    
}else{
    console.log("No cards left ");
    
}