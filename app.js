let joueurCourant = "X";
let gagnant = false;
let etatPartie = ["","","","","","","","",""];

function gagnantTrouver(){
    gagnantTrouver = true;
    alert(" Bravo " + joueurCourant)
}
function ValiderLigne(hauteur, largeur){
    
    for (let i = 0; i < hauteur; i++) {
        const indicepremierElement = i * largeur;
        const premierElement = etatPartie[indicepremierElement];
        let gagnant = true;
    
        if(premierElement == ""){
            gagnant = false;
        }
    
        for (let j = 1; j < largeur; j++) {
            const elementCourant = etatPartie [indicepremierElement + j];
    
            if(premierElement != elementCourant){
                gagnant = false;
            }
        }
        if (gagnant){
            gagnantTrouver();
        }
       }
}

function VerifierGagnant() {
    const largeur = 3;
    const hauteur = 3;
    ValiderLigne(hauteur, largeur);
}
function changerJouer(){
    if(joueurCourant == "X"){
        joueurCourant ="O";
    }
    else{
        joueurCourant = "X";
    }
}
function AjouterEvenmentClick (elementHtml, indiceCase){   
   elementHtml.addEventListener("click", ()=>{
    if(gagnant){
        return;
    }
    if(elementHtml.innerHTML ==""){
        etatPartie[indiceCase] = joueurCourant;
        elementHtml.innerHTML = joueurCourant;
        console.log(etatPartie);
        VerifierGagnant();
        changerJouer();  
    }
  

   });
}
window.addEventListener("load",()=>{
   AjouterEvenmentClick(document.getElementById("top-left"), 0);
   AjouterEvenmentClick(document.getElementById("top"), 1);
   AjouterEvenmentClick(document.getElementById("top-right"), 2);
   AjouterEvenmentClick(document.getElementById("left"), 3);
   AjouterEvenmentClick(document.getElementById("middle"), 4);
   AjouterEvenmentClick(document.getElementById("right"), 5);
   AjouterEvenmentClick(document.getElementById("bottom-left"), 6);
   AjouterEvenmentClick(document.getElementById("bottom"), 7);
   AjouterEvenmentClick(document.getElementById("bottom-right"), 8);
});