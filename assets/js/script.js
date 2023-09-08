/* Change Language through image*/
let Engbutton = document.getElementById("eng");
let Swebutton = document.getElementById("swe");


Engbutton.addEventListener("click", function(){
window.location.href="index.html";
});

Swebutton.addEventListener("click", function(){
    window.location.href="index_swedish.html";
    
    });

    /*Right or Wrong tracker*/
    let rightCounter =0;
    let wrongCounter =0;
 /*Coinflip Game*/
   function coinflip() {
    let randomNumber = Math.random ();
    return randomNumber <0.5 ? "Heads": "Tails";
   };   
   
   /* ButtonClick interaction*/
   function buttonClick(userChoice){
    let resultElement = document.getElementById("result");
    let coinOutcome = coinflip();
    let rightScoreElement = document.getElementById("right");
    let wrongScoreElement = document.getElementById("wrong");
    resultElement.textContent= `Coin has landed on ${coinOutcome}`


    /*If & Else actions depening on the users pick */
    if (userChoice.toLowerCase() === coinOutcome.toLowerCase()) {
        resultElement.textContent += " Congratulations, you win!";
        rightCounter++;
      } else {
        resultElement.textContent += " Sorry, you lose!";
        wrongCounter++;
      }

    rightScoreElement.textContent = `Right ${rightCounter}`;
    wrongScoreElement.textContent = `Wrong ${wrongCounter}`;
   
    }