let joueurCourant = "X";
let gagnant = false;

function VerifierGagnant() {
    const topLeftValue = document.getElementById("top-left").innerHTML;
    const topValue = document.getElementById("top").innerHTML;
    const toprightValue = document.getElementById("top-right").innerHTML;
    const LeftValue = document.getElementById("left").innerHTML;
    const middleValue = document.getElementById("middle").innerHTML;
    const rightValue = document.getElementById("right").innerHTML;
    const bottomleftValue = document.getElementById("bottom-left").innerHTML;
    const bottomValue = document.getElementById("bottom").innerHTML;
    const bottomrightValue = document.getElementById("bottom-right").innerHTML;
    
    if(topLeftValue == topValue && topLeftValue == toprightValue && topLeftValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(LeftValue == middleValue && LeftValue == rightValue && LeftValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(bottomleftValue == bottomValue && bottomleftValue == bottomrightValue && bottomleftValue !="" ){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(topLeftValue == bottomleftValue && topLeftValue == LeftValue && topLeftValue != ""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(topValue == bottomValue && topValue == middleValue && topValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(toprightValue == bottomrightValue && toprightValue == rightValue && toprightValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if(topLeftValue == bottomrightValue && topLeftValue == middleValue && topLeftValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
    else if (toprightValue == bottomleftValue && toprightValue == middleValue && toprightValue !=""){
        alert("Gagnant!")
        gagnant = true;
    }
 
}
function changerJouer(){
    if(joueurCourant == "X"){
        joueurCourant ="O";
    }
    else{
        joueurCourant = "X";
    }
}
function AjouterEvenmentClick (elementHtml){   
   elementHtml.addEventListener("click", ()=>{
    if(gagnant){
        return;
    }
    if(elementHtml.innerHTML ==""){
        elementHtml.innerHTML = joueurCourant;
        changerJouer(); 
        VerifierGagnant();
    }
  

   });
}
window.addEventListener("load",()=>{
   AjouterEvenmentClick(document.getElementById("top-left"));
   AjouterEvenmentClick(document.getElementById("top"));
   AjouterEvenmentClick(document.getElementById("top-right"));
   AjouterEvenmentClick(document.getElementById("left"));
   AjouterEvenmentClick(document.getElementById("middle"));
   AjouterEvenmentClick(document.getElementById("right"));
   AjouterEvenmentClick(document.getElementById("bottom-left"));
   AjouterEvenmentClick(document.getElementById("bottom"));
   AjouterEvenmentClick(document.getElementById("bottom-right"));
});