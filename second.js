function genrandom(){
    let randomnumber=Math.floor(Math.random()*12)+1;
    if(randomnumber>10){
        return 10;
    }else if(randomnumber===1){
        return 11;
    }else{
        return randomnumber;
    }
}

function startgame(){
    sum=0;
    cards=[]
    rew=0;
    isAlive=true;
    let card1=genrandom()
    let card2=genrandom()
    cards.push(card1)
    cards.push(card2)
    sum=card1+card2;
    rew+=50;
    rendergame();
}

let isAlive=false;
let haswon=false;
let cards=[];
let rew=0;
let sum=0;
let sumel=document.getElementById("sum");
let questionel=document.getElementById("question")
let cardel=document.getElementById("cards")
let rewards=document.getElementById("rewards")

function rendergame(){
    sumel.textContent="sum:"+" "+sum
    rewards.textContent="Rewards:"+" "+rew
    cardel.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardel.textContent+=cards[i]+" "
    }
    if(sum<21){
        questionel.textContent="You can draw another card"
    }else if(sum===21){
        questionel.textContent="You have won blackjack"
        haswon=true;
    }else{
        questionel.textContent="You are out of the game now!"
        isAlive=false
    }
}

function newcard(){
    if(isAlive===true && haswon===false){
    let cardnew=genrandom()
    cards.push(cardnew)
    sum+=cardnew
    rew+=50
    rendergame()
}}

