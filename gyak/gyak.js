function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function tombfeltolt(n) {
    let tomb = [];
    for (let i = 0; i < n; i++) {
        tomb.push(random(0, 30));
    }
    return tomb;
}
function Vanenulla(tomb) {
    let db=0;
    for (let i = 0; i < tomb.length; i++) {
       if (tomb[i]==0) {
        db++;
       }
    }
    return db;
}


function main() {
    let tomb = tombfeltolt(13);
    console.log(tomb);
    let nulla=Vanenulla(tomb);
    console.log(`Ennyi nulla van benne: ${nulla}`);
}
main();