


function focus() {
    const selec=document.getElementById("select");
    const label=document.getElementById("labell");
    let index=selec.selectedIndex;
    const auto=selec[index].value;
    console.log(auto);
    label.innerHTML=auto;
}

function main() {
    
}
main();