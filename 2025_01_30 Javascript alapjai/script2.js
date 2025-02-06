console.log("Kapcsolat")

let sz="";

do{
var r=Math.floor(Math.random()*90+10);
sz+=r+" ";
console.log(r);
}while(r%13!=0)


//let tomb=new Array();
//let tomb=[3,2,3];
let tomb=[];
tomb.push(5);
tomb.push(6);
console.log(tomb);
console.log(`Elso elem: ${tomb[0]}`)
console.log(`A tomb hossza:${tomb.length}`)
console.log(`A tomb utolso eleme:${tomb[tomb.length-1]}`)
tomb[21]=32;
//  console.log(tomb);
//console.log(tomb.Length);
for(let i=0;i<tomb.length;i++)
{
    console.log(i);
}
console.log(`-----------------------------------------------------`)


console.log(typeof(`yes`));
console.log(isNaN(parseInt("asada")))

console.log(`-----------------------------------------------------`)



let tomb2=[2,"alma",3,'korte',true]
console.log(tomb2)
