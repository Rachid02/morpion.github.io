let cellules = document.querySelectorAll(".cellule");
let joueur = document.querySelector("span");

let etat = {
    joueurEnCours: 1,
    cellule1:0,
    cellule2:0,
    cellule3:0,
    cellule4:0,
    cellule5:0,
    cellule6:0,
    cellule7:0,
    cellule8:0,
    cellule9:0,
};

let resetEtat = () => {
    joueurEnCours = 1;
    etat.cellule1 = 0;
    etat.cellule2 = 0;
    etat.cellule3 = 0;
    etat.cellule4 = 0;
    etat.cellule5 = 0;
    etat.cellule6 = 0;
    etat.cellule7 = 0;
    etat.cellule8 = 0;
    etat.cellule9 = 0;
}

let verification = () => {
    if(
        (etat.cellule1 === etat.cellule2 && etat.cellule2 === etat.cellule3 && etat.cellule1 > 0) ||
        (etat.cellule4 === etat.cellule5 && etat.cellule5 === etat.cellule6 && etat.cellule4 > 0) ||
        (etat.cellule7 === etat.cellule8 && etat.cellule8 === etat.cellule9 && etat.cellule7 > 0) ||
        (etat.cellule1 === etat.cellule4 && etat.cellule4 === etat.cellule7 && etat.cellule1 > 0) ||
        (etat.cellule2 === etat.cellule5 && etat.cellule5 === etat.cellule8 && etat.cellule2 > 0) ||
        (etat.cellule3 === etat.cellule6 && etat.cellule6 === etat.cellule9 && etat.cellule3 > 0) ||
        (etat.cellule1 === etat.cellule5 && etat.cellule5 === etat.cellule9 && etat.cellule1 > 0) ||
        (etat.cellule3 === etat.cellule5 && etat.cellule5 === etat.cellule7 && etat.cellule3 > 0)
    ){
        return true;
    }
    else if(etat.cellule1 != 0 &&
            etat.cellule2 != 0 &&
            etat.cellule3 != 0 &&
            etat.cellule4 != 0 &&
            etat.cellule5 != 0 &&
            etat.cellule6 != 0 &&
            etat.cellule7 != 0 &&
            etat.cellule8 != 0 &&
            etat.cellule9 != 0
            ){
        return null;
    }
    else{
        return false;
    }
}

let jouerCellule = (el) => {
    let idCellule = el.target.id;
    if(etat[idCellule] != 0) return;

    etat[idCellule] = etat.joueurEnCours;

    let etatJeu = verification();

    if(etatJeu === true){
        alert("Le gagnant est le joueur" + etat.joueurEnCours);
        if(etat.joueurEnCours === 1)
        resetEtat();
        cellules.forEach((text) => {
            text.innerText = "";
        });
    }
    else if (etatJeu === null){
        alert("Match nul");
        joueur.innerText = "1";
        resetEtat();
        cellules.forEach((text) => {
            text.innerText = ""
        });
    }
    else if(etatJeu === false){
        if(etat.joueurEnCours === 1){
            el.target.innerText = "X"
            etat.joueurEnCours = 2;
            joueur.innerText = "2";
        }
        else{
        el.target.innerText = "O"
        etat.joueurEnCours = 1;
        joueur.innerText = "1"; 
        }  
    }
    else{

    }
    
};

cellules.forEach((element)=>{
    element.addEventListener("click", jouerCellule);
})



let bouton = document.querySelector("div button")
bouton.addEventListener("click", ()=>{
        // console.log("ça marche")
        window.location.reload()
    });
