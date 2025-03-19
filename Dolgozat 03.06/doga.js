function random(a,b) {
    return Math.floor(Math.random()*(b-a+1)+a)
}


function tombfeltoltes(tomb) {
    for (let i = 0; i < 20; i++) {
        let a=random(1,6);
        let b=random(1,6);
        if(b>a){
            let c=a;
            a=b;
            b=c;
        }
        tomb.push(""+a+b);
        
    }

}
function Megszamlalas(tomb) {
    let db=0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i]) {
            db++;
        }
    }
    return db;
}

function main() {
    tomb=[];
    tombfeltoltes(tomb);
    console.log(tomb)

    let db=Megszamlalas(tomb);
    console.log(db);
}
main();