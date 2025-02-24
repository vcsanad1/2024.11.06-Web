

let tomb = [];
let db = 0;
let dobasok = [];

for (let i = 0; i < 10; i++) {
    db = Math.floor(Math.random() * 7);
    dobasok.push(db);
    for (let j = 0; j < db; j++) {
        let rando = Math.floor(Math.random() * 26 + 11);
        dobasok.push(rando);
    }

}
console.log(`Hány kör: ${db} Dobas 1: ${dobasok} `);

let maxi = 0;
for (let i = 0; i < db.length; i++) {

    if (dobasok > maxi) {
        maxi = dobasok;
    }
    console.log(maxi);

}
let maxii = 0;
for (let i = 0; i < dobasok.length; i++) {
    if (dobasok[db] < dobasok[i]) {
        db = i;
    }
}
console.log(`A legnagyobb dobas hanyadik korbe: ${db}`)

let atlagok = [];
for (let i = 0; i < dobasok.length; i++) {
    let darab = dobasok[i];
    let osszeg = 0;
    for (let j = i + 1; j < i + darab; j++) {
        osszeg += dobasok[j];
    }
    if (darab != 0) {
        atlagok.push(osszeg / darab)
    }
    else {
        atlagok.push
    }
    atlagok.push[osszeg / darab];
    i += darab;
}
console.log(`Az atlag:${atlagok}`);
let max = 0;
for (let i = 0; i < atlagok.length; i++) {
    if (atlagok[i]>atlagok[max]) {
        max=i;
    }
    
}
console.log(`Az atlag: ${max}`);