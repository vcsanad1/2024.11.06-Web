function egyMegoldasKiiratasa(a,b) {
    const x=-b/(2*a);
    document.getElementById("megoldas1").innerHTML="x<sub>1</sub>"+x;
}
function kettoMegoldas(a,b,d) {
    const g=(-b+Math.sqrt(d))/(2*a);
    const x=(-b+Math.sqrt(d))/(2*a);
    document.getElementById("megoldas1").innerHTML="x<sub>1</sub>"+g.toFixed(2);
    document.getElementById("megoldas2").innerHTML="x<sub>2</sub>"+x.toFixed(2);
}
function masodfoku() {
    let a=parseInt(document.getElementById("aszam").value);
    let b=parseInt(document.getElementById("bszam").value);
    let c=parseInt(document.getElementById("cszam").value);
    const d=b*b-4*a*c;
    let megoldasokszama=document.getElementById("megoldasokSzama");
    if (d<0) {
     megoldasokszama.innerText="megoldasok szama: 0";   
    }
    else if(d===0){
        megoldasokszama.innerText="megoldasok szama: 1"; 
        egyMegoldasKiiratasa(a,b);
    }
    else{
        megoldasokszama.innerText="megoldasok szama: 2"; 
        kettoMegoldas(a,b,d);
    }
}