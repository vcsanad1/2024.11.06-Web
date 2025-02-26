
function ertekekMegadasa() {
    let a=5;
    var b=6;
    console.log(`${a} ${b}`)
}


function tombgeneralas(n){
let t=[];
for (let i = 0; i < n; i++) {
    t.push(Math.floor(Math.random()*10));
}
return t;
}
function Tombatlag(tombb) {
    let t=[];
for (let i = 0; i < 13; i++) {
    t.push(Math.floor(Math.random()*10));
    let atlag=i%t;
    tombb=atlag;
}
return t;
}
function VanEnulla(tombb) {
    let vanenulla=false;
        if (tombb[i]===0) {
            vanenulla=true;
        }
    }


function main() {
    ertekekMegadasa();
    let randomm=Math.random(10);
    console.log(randomm)

    let tombb=tombgeneralas(13);
    console.log(tombb);

    VanEnulla(tombb)
    console.log(VanEnulla(tombb,0))
    console.log(Tombatlag(tombb));
    

    // tombfeltoltes -visszaadja a feltoltott tombot
    // fv -lebego pontos, logikai, egesz-index
    
    // hány darab negativ szám van?
    //pozitiv szamok atlaga
    // Ha van benne 10 es hányadik  helyen

}
main();









