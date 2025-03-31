// console.log(adatok)
function SzovegfelDolgoz(adatok) {
    const tomb=szovegDarabol(adatok,";");
    console.table(tomb);
    let adat=[];
    for (let i = 0; i < tomb.length; i++) {
        const st=szovegDarabol(tomb[i]," ")
        adat.push({
            korzet:parseInt(st[0]),
            szavazatok:st[1],
            veznev:st[2],
            kernev:st[3],
            part:st[4]
        })
    }
    return adat;
}
function szovegDarabol(adatok,elvalaszt) {
    let darabok=[];
    let text="";
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i]!=elvalaszt) {
            text+=adatok[i];
        }
        else{
            darabok.push(text);
            text="";
        }
    }
    darabok.push(text);
    return darabok;
}

function MEgszamol(darabol) {
    let db=0;
    for (let i = 0; i < darabol.length; i++) {
            db++;
    }
    return db;
}

function Szavazat(darabol,vezeteknev,kereszt) {
    let table=[];
    let i=0;
    while (i<darabol.length&&!(darabol[i].veznev===vezeteknev&&darabol[i].kernev===kereszt)) {
    i++;
    }
    if (i>=darabol.length) {
        return -1;
    }
    else{
        return [darabol[i].veznev,darabol[i].kernev]
    }
}

function main(adatok) {
    const darabol=SzovegfelDolgoz(adatok);
    console.table(darabol);

    const xd=MEgszamol(darabol);
    console.log(`A helyi választason ${xd}-ember indult.`);
    
    const vezeteknev="Simon";
    const kereszt="Simon";
    const vezkereszt=Szavazat(darabol,vezeteknev,kereszt);
    console.log(vezkereszt);
}
main(adatok);