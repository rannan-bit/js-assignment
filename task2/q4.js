//4. Raju's Instagram Giveaway! Win an iPhone!
    //  Raju is hosting a giveaway on the instagram to give awaya brand nw iPhone!
    //  To select the winner, he needs help identifying the first unique commenter
    //  on his giveaway post - the first user who commented only once without repeating.
    //  The challenge: 
	// Given a list of Instagram usernames representing the order of comments,
    //     write a function that returns the username of the first commenter who didn't
    //     comment again. If every user commented multiple times, the function should
    //     return "No unique commenter".
    //     Examples:
    //     comments1 = ['nisha', "arjun', 'nisha', 'vicky', 'arjun', 'meera']
    //     Output: "vicky"
    //     comments2 = ['alex', "alex','sam', 'sam' ]
    //     Output: "No unique commenter"
    let comments=['nisha', 'arjun', 'nisha', 'vicky', 'arjun', 'meera' ]
    for(let i=0;i<comments.length;i++){
        let count=0
        for(let j=0;j<comments.length;j++){
            if(comments[i]===comments[j]){
                count++
                
            }
        }
        if(count==1){
            console.log(comments[i]);
            break
            
        }
    }
