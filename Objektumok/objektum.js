//rendszam, tulajdonos, kilometer,szin

// const autoRendszam ="HH-II-125";
// const autoTulaj="Kis Pista";
// const autoKilometer=125321;
// const autoSzin="piros";

const auto={
    rendszam:"HH-II-125",
    tulaj:"Kis Pista",
    km:125321,
    szin:"zold",

}

console.log(auto);
auto.tulj="Kis Kocsog";
console.log(auto.tulj);
console.log(auto.tulaj);
console.log(auto);
// console.log(auto["tulaj"]);

const auto2={
    rendszam:"HH-II-121",
    tulaj:"Kis Julia",
    km:125320,
    szin:"piros",
}
console.log(auto2)
auto2.tulajleanykorineve="Nagy Julia";
console.log(auto2);

const autosok=[];
autosok.push(auto);
autosok.push(auto2);
console.table(autosok);


const diakok=[
    {
        om:"13131313",
        nev:"Jani",
        haviAtlagok: [4.6,3.7,4.0,4.1,3.1,3.5,3.6],
        tantargy:{
            matematika:4.6,
            tortenelem:3.7,
            magyar:3.1
        },
        // emailgen:function () {
        //     return this.tantargy;
        // }
        emailgen:function () {
            const o=this.om;
            const n=this.nev;
            return n[0]+n[1]+n[2]+o[0]+o[1]+o[2]+"@valami.hu";
        }
    },
    {
        om:"13131312",
        nev:"Csilla",
        haviAtlagok: [4.5,3.5,4.1,4.2,3.3,3.9,4.3]
    }
]

// let osszeg=0;
// let db=0;
// let atlag1=0;
// for (let i = 0; i < diakok.length; i++) {
//     osszeg+=diakok[0].haviAtlagok[i];
//     db++;
//     for (let j = 0; j < diakok.length; j++) {
//         osszeg+=diakok[1].haviAtlagok[i];
//         db++;
//     }
//      atlag1=osszeg/db++;
// }
// console.log(`${(atlag1)}` );

console.log(diakok[0].tantargy.matematika);
console.log(diakok[0].emailgen());
console.table(diakok[1].haviAtlagok[5]);