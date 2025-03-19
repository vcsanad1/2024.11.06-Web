function random(a,b) {
    return Math.floor(Math.random()*(b-a+1)+a)
}

function tombfeltolt(n) {
    let tomb=[];
    for (let i = 0; i < n; i++) {
        tomb.push(random(2,23));
    }
    return tomb;
}
function atlagg(tomb) {
    let osszeg=0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i]
    }
    return osszeg/tomb.length;
}
function PozitivE(tomb) {
    let pozitiv=[];
    for (let i = 0; i < tomb.length; i++) {
    if (tomb[i]%2===0) {
        pozitiv.push(tomb[i]);
    }        
    }
    return pozitiv;
}
function Nempozitiv(tomb) {
    let negativ=[];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i]%2!==0) {
            negativ.push(tomb[i]);
        }
    }
    return negativ
}
function main() {
    let tomb=tombfeltolt(14);
    console.log(tomb);

    let atlag=atlagg(tomb);
    console.log(atlag.toFixed(2));

    let pozitiv=PozitivE(tomb);
    console.log(pozitiv);

    let negativ=Nempozitiv(tomb);
    console.log(negativ);
}
main();