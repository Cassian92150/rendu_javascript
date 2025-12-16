let hercule = {
    name: "Hercule",
    attaque: 10,
    pv: 100,
}

let petrouchka = {
    name: "Petrouchka",
    attaque: 15,
    pv: 80,
}

console.log(`combat opposant ${hercule.name} possédant une attaque de ${10} et ${100} pv, à ${petrouchka.name} possédant une attaque de ${petrouchka.attaque} et ${petrouchka.pv} pv.`);

function attack (){
    if(console.log(precision()) >=0.2){
    petrouchka.pv = petrouchka.pv - hercule.attaque
    console.log("hercule attaque petrouchka : PV de Petrouchka restant " + petrouchka.pv);
    } else {
        console.log("l'attaque a échouer");
    }
    if(console.log(precision()) >=0.2){
    hercule.pv = hercule.pv - petrouchka.attaque
    console.log("petrouchka attaque hercule : PV d'Hercule restant " + hercule.pv);
    } else {
        console.log("l'attaque a échouer");
    }
}

function precision() {
  return Math.random();
}



for (let i = 0; i < 50; i++) {
    if (hercule.pv <= 0){
        console.log("Petrouchka a gagné");
        break
    } if (hercule.pv <= 0){
        console.log("Hercule a gagné");
        break
    } else {
        attack()
        console.log("-----------fin du tour ---------");
    }
}