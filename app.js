let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".Score-Board");
const result_p=document.querySelector(".result >p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissor_div= document.getElementById("s");
function converttoword(letter){
    if(letter=='r') return "Rock";
    if(letter=='p') return "Paper";
    else return "Scissor";
}
function getcompchoice(){
    const choices=['r','p','s'];
    const randomnumber=(Math.floor(Math.random()*3));
    return choices[randomnumber];
}
function win(userchoice,compchoice){
    userscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML=`${converttoword(userchoice)} beats ${converttoword(compchoice)} YOU Win`;
    const greenglow=document.getElementById(userchoice);
    greenglow.classList.add('green-glow');
    setTimeout(()=> greenglow.classList.remove('green-glow'),300);
}
function losses(userchoice,compchoice){
    compscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML=`${converttoword(userchoice)} loses to ${converttoword(compchoice)} YOU LOSSES`;
    const redglow=document.getElementById(userchoice);
    redglow.classList.add('red-glow');
    setTimeout(() => redglow.classList.remove('red-glow'),300);
}
function draw(userchoice,compchoice){
    result_p.innerHTML=`${converttoword(userchoice)} Equals ${converttoword(compchoice)} It's A Draw`;
    const greyglow=document.getElementById(userchoice);
    greyglow.classList.add('grey-glow');
    setTimeout(() => greyglow.classList.remove('grey-glow'),300);
}
function game(userchoice){
    const compchoice=getcompchoice();
    switch(userchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
           // console.log("USER WIN.");
           win(userchoice,compchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            //console.log("USER LOSSES");
            losses(userchoice,compchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            //console.log("DRAW");
            draw(userchoice,compchoice);
            break;
    }

}
function main(){
rock_div.addEventListener('click',()=>game('r'));
paper_div.addEventListener('click',()=>game('p'));
scissor_div.addEventListener('click',()=>game('s'));
}

main();
