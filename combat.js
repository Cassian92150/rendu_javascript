let hercule = {
    name: "Hercule",
    attaque: 10,
    pv: 100,
    precis:0.2,
}

let petrouchka = {
    name: "Petrouchka",
    attaque: 15,
    pv: 80,
    precis: 0.4,
}

const perso = {hercule, petrouchka}

console.log(`combat opposant ${hercule.name} possédant une attaque de ${10} et ${100} pv, à ${petrouchka.name} possédant une attaque de ${petrouchka.attaque} et ${petrouchka.pv} pv.`);

function attack (){
    if(precision(hercule)){
    petrouchka.pv = petrouchka.pv - hercule.attaque
    console.log("hercule attaque petrouchka : PV de Petrouchka restant " + petrouchka.pv);
    } else {
        console.log("l'attaque a échouer");
    }
    if(precision(petrouchka)){
    hercule.pv = hercule.pv - petrouchka.attaque
    console.log("petrouchka attaque hercule : PV d'Hercule restant " + hercule.pv);
    } else {
        console.log("l'attaque a échouer");
    }
}


function precision(perso) {
  return Math.random() > perso.precis;
}


for (let i = 0; i < 50; i++) {
    if (hercule.pv <= 0){
        console.log("Petrouchka a gagné");
        break
    } else if (petrouchka.pv <= 0){
        console.log("Hercule a gagné");
        break
    } else {
        attack()
        console.log("-----------fin du tour ---------");
    }
}