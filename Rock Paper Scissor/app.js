//caching the dom elements
//means declaring all the variables which we ca use later
//getting them from their Id's and storing into variables for future use in the program
//storing these document.-- into a variable and use it whenever to get that element makes it easy
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".Score-Board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");


function getComputerChoice(){
    const choices= ['rock','paper','scissors'];//array of choices present
    const randomChoice=(Math.floor(Math.random()*3));//generating random choices or numbers between 0 to 3 and storing it inside randomChoice
    return choices[randomChoice];//passing randomChoice as array input i.e like array[i]
}

function convertToWord(letter){
    if (letter==="rock") return "Rock";
    if (letter==="paper") return "Paper";
    return "Scissors";
}


function win(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);//sotoring LHS in a variable coz we are using that alot
    userScore++;//as we win increment user score by 1
    userScore_span.innerHTML=userScore;//setting the value of userscore in the span element "userScore"
    computerScore_span.innerHTML=computerScore;//setting the value of computerscore in the span element "computerScore"
    result_p.innerHTML=convertToWord(userChoice) +"(user) beats "+convertToWord(computerChoice)+"(comp). You Win! 🔥";//setting the RHS text in the p tag of result div using innerHTMl
    userChoice_div.classList.add('green-glow');//adding green-glow class to the div of userchoice
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},400);//setting timer to remove that green glow border after 400ms
}


function lose(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;//as we win increment user score by 1
    userScore_span.innerHTML=userScore;//setting the value of userscore in the span element "userScore"
    computerScore_span.innerHTML=computerScore;//setting the value of computerscore in the span element "computerScore"
    result_p.innerHTML=convertToWord(userChoice) +"(user) loses to "+convertToWord(computerChoice)+"(comp). You Lost! 😕";
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')},400);
}


function draw(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    result_p.innerHTML=convertToWord(userChoice) +"(user) equals "+convertToWord(computerChoice)+"(comp). It's a draw ";
    userChoice_div.classList.add('grey-glow');
    setTimeout(function(){userChoice_div.classList.remove('grey-glow')},400);
}


function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
    }
    console.log("User choice =>"+ userChoice);//getting input from user as userChoice
    console.log("computer choice =>"+ computerChoice);
}


function main(){
rock_div.addEventListener('click',function(){
    game("rock");//funtion game() with argument as rock ,paper or scissors
})
paper_div.addEventListener('click',function(){
    game("paper");
})
scissors_div.addEventListener('click',function(){
    game("scissors");
})
}


main();
