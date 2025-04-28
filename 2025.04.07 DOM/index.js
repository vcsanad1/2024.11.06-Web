
function elsoOra() {
    document.body.style.backgroundColor="yellow";
    let fodiv=document.getElementById("fodiv");
    // document.getElementById("fodiv").style.backgroundColor="red";
    // document.getElementById("fodiv").style.color="blue";
    // document.getElementById("fodiv").style.width="80%";
    fodiv.style.backgroundColor="red";
    fodiv.style.color="blue";
    fodiv.style.width="80%";


    let bekezdes= document.getElementById("lorembekezd")
    const szoveg=bekezdes.innerHTML;
    console.log(szoveg.split(" "))
    bekezdes.innerHTML="ez egy <br>bekezdes"
}
function masodikOra() {
        //legelső megadott selektort kezeli
        //    let div= document.querySelector("div");
        //    div.style.backgroundColor="black";

        let div= document.querySelectorAll("div");
        console.log(div);
        div[1].style.backgroundColor="black";
        for (let i = 0; i < div.length; i++) {
            div[i].style.width="50%";
        }
        document.querySelector("#fodiv").style.padding="10px";
        document.querySelector("img").style.width="300px";
        let img=document.querySelector("img");
        img.title="képre irt iras";
        img.ertek="érték"
        console.log(img)

        let borderek=document.querySelectorAll(".border")
        console.log(borderek);
        for (let i = 0; i < borderek.length; i++) {
            borderek[i].style.borderTop="1px solid black";
            borderek[i].style.borderleft="2px dotted white";
            borderek[i].style.borderBottom="3px dashed black";
            borderek[i].style.borderRight="4px dashed darkgreen";
        }
}   
function keretezes() {
    let borderek=document.querySelectorAll(".border")
        console.log(borderek);
        for (let i = 0; i < borderek.length; i++) {
            borderek[i].style.borderTop="1px solid black";
            borderek[i].style.borderleft="2px dotted white";
            borderek[i].style.borderBottom="3px dashed black";
            borderek[i].style.borderRight="4px dashed darkgreen";
        }
}
function harmadikOra() {
    let azonosito=document.getElementById("azonosito").value;
    console.log(azonosito)
    let jelszo=document.getElementById("jelszo").value;
    console.log(jelszo);
}
function MasodfokuMegoldas() {
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    
}
function main() {
    elsoOra();
    masodikOra();
    harmadikOra();
}
main();