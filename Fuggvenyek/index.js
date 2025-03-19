function ertekekMegadasa() {
    let a = 13;
    let b = 19;
    console.log(`${a}, ${b}`);
}

function randomSzam(a, b) {
    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function TombGeneralas(n) {
    let t = [];
    for (let i = 0; i < n; i++) {
        t.push(randomSzam(-10, 10));
    }
    return t;
}

function TombAtlag(tomb) {
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    return osszeg / tomb.length;
}

function TombMaxIndex(tomb) {
    let maxindex = 0;
    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i] > tomb[maxindex]) {
            maxindex = i;
        }
    }
    return maxindex+1;
}
function VaneElem(tomb ,szam) {
    let i=0;
     while (i<tomb.length&&tomb[i]!=szam) {
        i++;
     }
     return i<tomb.length
}
function PozitivAtlag(tomb) {
    let osszeg = 0;
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > 0) {
            osszeg += tomb[i];
            db++;
        }
    }
    if (db === 0) {
        return 0;
    }
    return osszeg / db;
}

function TizesHelye(tomb) {
    let indexek = [];
    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i] === 10) {
            indexek.push(i);
        }
    }
    return indexek;
}
function main() {
    console.log("Függvény belső magja");
    ertekekMegadasa();
    let rnd = randomSzam(-10, 20);
    console.log(rnd);


    let tomb = TombGeneralas(13);
    console.log(tomb);


    let atlag = TombAtlag(tomb);
    console.log("Tömb elemeinek átlaga:" + atlag.toFixed(2));




    console.log("max elem osszeg:" + TombMaxIndex(tomb));
    console.log("Van-e nulla: "+VaneElem(tomb,0));
    //Hány darab negatív szám van?
    console.log(`Pozitiv szamok atlaga:`+PozitivAtlag(tomb).toFixed(2))
    //Pozitív számok átlaga?
    console.log(`10 hanyadik helyen: ` + TizesHelye(tomb))
    //Ha van benne 10-es akkor hányadik helyen?

    //rendezes
    // Szurd ki az egyedi értékeket ha valamelyikbol tobb van csak egyet
}

main();






