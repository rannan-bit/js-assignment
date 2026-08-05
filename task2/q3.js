//3. 
accounts = [
    {
        acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]

    },
    {
        acno: 1001, ac_type: 'current', balance: 30000, transaction: [
            {
                to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
            },
            {
                to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay'
            },
            {
                to: 1003, amount: 10000, msg: 'emi', mode: 'neft'
            },
        ]

    },
    {
        acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
            {
                to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]

    },
    {
        acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'n ef'
            },
            {
                to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    }]

//1.print total number of accounts
console.log("-----print total number of accounts-----");

console.log(accounts.length);

//2.print acount number whose account type is savings
console.log("-----print acount number whose account type is savings-----");
accounts.filter((a)=>a.ac_type=="savings").forEach((a)=>console.log(a.acno))

//3.print balance of account number 1000
console.log("-----print balance of account number 1000-----");
accounts.filter((a)=>a.acno=="1000").forEach((a)=>console.log(a.balance))
//4.print all gpay transactions
console.log("-----print all gpay transactions-----");
accounts.forEach((a)=>{
    a.transaction.forEach((b)=>{
        if(b.mode==="gpay"){
            console.log(b);
            
        }
    })
})
//5.print all transactions whose amount>5000
console.log("-----print all transactions whose amount>5000-----");
accounts.forEach((a)=>{
    a.transaction.forEach((b)=>{
        if(b.amount>5000){
            console.log(b);
            
        }
    })
})
//6.print credit transaction of account 1002
console.log("-----print credit transaction of account 1002-----");
accounts.forEach((a)=>{
    a.transaction.forEach((b)=>{
        if(b.to=="1002"){
            console.log(b);
            
        }
    })
})
//7.print total credit amount to the account 1002
console.log("-----print total credit amount to the account 1002-----");
let credited=0
accounts.forEach((a)=>{
    a.transaction.forEach((b)=>{
        if(b.to=="1002"){
            credited += b.amount
            
        }
    })
})
console.log(credited);

//8.print debit transaction of account 1002
console.log("-----print debit transaction of account 1002-----");
accounts.filter((a)=>a.acno=="1002").forEach((a)=>console.log(a.transaction))
//9.print total debit amount from the account 1002
console.log("-----print total debit amount from the account 1002-----");
let debit=0
accounts.filter((a)=>a.acno=="1002").forEach((a)=>{
    a.transaction.forEach((b)=>{
        debit+=b.amount
        
    })
})
console.log(debit);

//10.print transaction history of 1002
console.log("-----print transaction history of 1002-----");
accounts.forEach((a)=>{
    a.transaction.forEach((b)=>{
        if(b.to=="1002"){
            console.log("credit:" , b); 
        }
    })
})
accounts.filter((a)=>a.acno=="1002").forEach((a)=>{
    a.transaction.forEach((b)=>{
        console.log("debit:" , b);  
    }) 
})

//11.current balance of 1002
console.log("-----current balance of 1002-----");
accounts.filter((a)=>a.acno=="1002").forEach((a)=>console.log(a.balance))
//12.print highest  balance account details
console.log("-----print highest  balance account details-----");
console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));
