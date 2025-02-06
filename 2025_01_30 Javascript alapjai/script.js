console.log("kapcsolat");

var a = 13;
var s = "13";
var sz = '15';
var b = true;

console.log(a);
console.log(s);
console.log(sz);    
console.log(b);

// matematikai operátorok: +-*/%
// logikai operátorok: && || 
// bitenkénti operátorok: & | ^
// szöveges operátor: konkatenálás-összefűzés +

console.log(s+b);
console.log(a+b); //true 1, false 0
console.log(a === s); // == értékvizsgálat, === érték+típus vizsgálat
console.log(a+s);
console.log(a+parseInt(s))

/*Vezérlo szerkezetek
szekvencia - utasitasok sorozata
szelekcio-elágazások
Iterácio-ciklusok
*/

/*Elágazás */
if(a === s) {
    console.log(`${a} =? ${s} A két érték egyenlő!`);
}
else{
    console.log(`${a} =? ${s} A két érték nem egyenlő!`);
}
/*Ciklusok*/
/*Számlalos -For
//Elol tesztelos-while
//Hátul tesztelos-do while
*/


//console.log(i);
sz='';
var j=100;
while(j<110){
    sz+=j+'';
    j++;
}
console.log(j);

var k="";
do{
    console.log();
    k++;
}
while(k<1010);

var s = "";
for(var i = 1; i < 10; i++) {
  s += i + " ";
}
console.log(s);

let rnd=Math.random();
console.log(rnd);

let szamz=Math.random()+5*2;
console.log(szamz);

let ja=Math.random()*6+1;
console.log(Math.floor(ja));

let ga=Math.random()*16-10;
console.log(ga);

