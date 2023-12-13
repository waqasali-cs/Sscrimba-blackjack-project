let cards=[]
let sum=0
let isAlive=false
let hasBlackjack=false



function startgame(){
    let firstNum= getRandom()
    let secondNum =getRandom()
    cards=[firstNum,secondNum]
    sum= firstNum+secondNum
    isAlive=true
    rendergame()
    
}

function rendergame(){

    document.getElementById("cards").textContent="Cards: "
    for (i=0; i<cards.length;i++){
        document.getElementById("cards").textContent+=cards[i]+ " "
    }
    document.getElementById("sum").textContent= "Sum:" + sum
    
    if (sum>21){
        document.getElementById("message-el").textContent="out"
    } else if(sum<=20){
        document.getElementById("message-el").textContent="Do you want to draw another card"
    } else{
        document.getElementById("message-el").textContent="You have black jack"
    }
}

function getRandom( ){
    let randomNum= Math.floor(Math.random()*13)+1
    if (randomNum >10){
        return 10}
    else if (randomNum ==1){
        return 11}
    else {
        return randomNum
    }
    
}


function newCard(){
    if(isAlive===true && sum<21){
        let newcard=getRandom()
        cards.push(newcard)
        sum+=newcard
        rendergame()}
}
