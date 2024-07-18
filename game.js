let userScore=0;
let computerScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorepara=document.querySelector("#USER-SCORE");
 const compScorepara=document.querySelector("#COMPUTER-SCORE");

    const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
   };

    const drawGame = () => {
    console.log("The game was drawn.");
    msg.innerText="Game was Drawn. Play again!";
    msg.style.backgroundColor=`white`;
  };
  
    const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorepara.innerText = userScore;
      msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor=`green`;
    } else {
      computerScore++;
      compScorepara.innerText = computerScore;
      msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor=`red`;
    }
  };
  

    const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice); 

      if(userChoice===compChoice){
        drawGame();
      }else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
      }
};

   choices.forEach((choice)=>{
       choice.addEventListener("click",()=>{
          const userChoice=choice.getAttribute("id");
             playGame(userChoice);
      });
   });


 
