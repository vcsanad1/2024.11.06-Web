function Szoveg(szoveg) {
    const sorok=szoveg.split(';')
    console.log(sorok);
    const n=parseInt(sorok[0]);
    let adatok=[];
    for (let i = 1; i < n.length; i+=11) {
            const adat={
                nev:sorok[i],
                matrix: matrixKialakitas(sorok,i)
            }


        adatok.push(adat)
    }
}





function main() {
    const beolv=Szoveg(szoveg);
}
main();