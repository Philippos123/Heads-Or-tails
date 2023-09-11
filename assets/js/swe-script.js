/* Change Language through image*/
let Engbutton = document.getElementById("eng");
let Swebutton = document.getElementById("swe");

var specialCharacter = '\u00C4'; 


Engbutton.addEventListener("click", function(){
window.location.href="index.html";
});

Swebutton.addEventListener("click", function(){
    window.location.href="index_swedish.html";
    
    });
      
      
      /* SWEDISH GAME MODE */

        /*Right or Wrong tracker*/
        let högerCounter =0;
        let vänsterCounter =0;
     /*Coinflip Game*/
       function swedishcoinflip() {
        let randomNumber = Math.random ();
        return randomNumber <0.5 ? "Krona": "Klöver";
       };   
       
       /* ButtonClick interaction*/
       function swedishbuttonClick(userChoice){
        let resultElement = document.getElementById("resultat");
        let coinOutcomes = swedishcoinflip();
        let rightScoreElement = document.getElementById("rätt");
        let wrongScoreElement = document.getElementById("fel");
        resultElement.textContent= `Myntet har landat på ${coinOutcomes}`
    
    
        /*If & Else actions depening on the users pick */
        if (userChoice.toLowerCase() === coinOutcomes.toLowerCase()) {
            resultElement.textContent += " Grattis du vann!";
            högerCounter++;
          } else {
            resultElement.textContent += " Vad tråkigt... Du Förlora";
            vänsterCounter++;
          }
    
        rightScoreElement.textContent = `Rätt ${högerCounter}`;
        wrongScoreElement.textContent = `Fel ${vänsterCounter}`;
       
        }