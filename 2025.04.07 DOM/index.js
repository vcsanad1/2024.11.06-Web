



function main() {
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
main();