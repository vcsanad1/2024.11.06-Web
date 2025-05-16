function Csuszkavalt() {
    let csuszkaa = document.getElementById("csuszka").value;
    let valt = document.getElementById("csuszkavalt");
    valt.innerHTML=csuszkaa+"méter";
}

function KepValt(fasz) {
    let betu = document.getElementById("betu");
    betu.innerText = fasz;
}

function elsoFeladat() {
    let elsofeladat = document.querySelector('input[name="kutya"]:checked');
    if (elsofeladat.value == "Borzsony") {
        pontok = 2;
    }
    else {
        pontok = 0;
    }

    return pontok;
}
function MasodikFeladat() {
    let pontok = elsoFeladat();
    let masodik = document.getElementById("selected").value;

    if (masodik === "Nagy-Milie" && pontok == 2) {
        pontok = 4;
    } else if (masodik === "Nagy-Milie" && pontok == 0) {
        pontok = 2;
    } else if (masodik != "Nagy-Milie" && pontok == 2) {
        pontok = 2;
    } 
    else {
        pontok = 0;
    }

    return pontok;
}
function HarmadikFeladat() {
    let pontok = MasodikFeladat();
    let harmadik = document.querySelectorAll('input[name="kozephegy"]:checked');
    let egy = "";
    let ketto = "";
    let harom = "";
    let negy = "";
    let ot = "";
    let db=0;
    for (let i = 0; i < harmadik.length; i++) {
        db++;
        if (db==1) {
            egy = harmadik[0].value;
        } else  if (db==2) {
            egy = harmadik[0].value;
            ketto = harmadik[1].value;
        }  else  if (db==3) {
            egy = harmadik[0].value;
            ketto = harmadik[1].value;
            harom = harmadik[2].value;
        }  else  if (db==4) {
            egy = harmadik[0].value;
            ketto = harmadik[1].value;
            harom = harmadik[2].value;
            negy = harmadik[3].value;
        }  else  if (db==5) {
            egy = harmadik[0].value;
            ketto = harmadik[1].value;
            harom = harmadik[2].value;
            negy = harmadik[3].value;
            ot = harmadik[4].value;
        }  
    }
    if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 4) {
        pontok = 12;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 2) {
        pontok = 10;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 0) {
        pontok = 8;
    } else if (egy === "Cserhát" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 4) {
        pontok = 7;
    } else if (egy === "Cserhát" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 2) {
        pontok = 5;
    } else if (egy === "Cserhát" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 0) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Cserhát" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 4) {
        pontok = 7;
    } else if (egy === "Budai-hegység" && ketto === "Cserhát" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 2) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Cserhát" && harom === "Keszthelyi-hegység" && negy === "Pilis" && ot === "Vértes" && pontok == 0) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Mecsek" && negy === "Pilis" && ot === "Vértes" && pontok == 4) {
        pontok = 7;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Mecsek" && negy === "Pilis" && ot === "Vértes" && pontok == 2) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Mecsek" && negy === "Pilis" && ot === "Vértes" && pontok == 0) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Mecsek" && ot === "Vértes" && pontok == 4) {
        pontok = 7;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Mecsek" && ot === "Vértes" && pontok == 2) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Mecsek" && ot === "Vértes" && pontok == 0) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Vértes" && ot === "Zselic" && pontok == 4) {
        pontok = 7;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Vértes" && ot === "Zselic" && pontok == 2) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && negy === "Vértes" && ot === "Zselic" && pontok == 0) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && pontok == 4) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && pontok == 2) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Gerecse" && harom === "Keszthelyi-hegység" && pontok == 0) {
        pontok = 1;
    } else if (egy === "Keszthelyi-hegység" && ketto === "Pilis" && harom === "Vértes" && pontok == 4) {
        pontok = 5;
    } else if (egy === "Keszthelyi-hegység" && ketto === "Pilis" && harom === "Vértes" && pontok == 2) {
        pontok = 3;
    } else if (egy === "Keszthelyi-hegység" && ketto === "Pilis" && harom === "Vértes" && pontok == 0) {
        pontok = 1;
    } else if (egy === "Cserhát" && ketto === "Mecsek" && harom === "Zselic" && negy === "Pilis" && ot === "Vértes" && pontok == 4) {
        pontok = 5;
    } else if (egy === "Cserhát" && ketto === "Mecsek" && harom === "Zselic" && negy === "Pilis" && ot === "Vértes" && pontok == 2) {
        pontok = 3;
    } else if (egy === "Cserhát" && ketto === "Mecsek" && harom === "Zselic" && negy === "Pilis" && ot === "Vértes" && pontok == 0) {
        pontok = 1;
    } else if (egy === "Budai-hegység" && ketto === "Zselic" && harom === "Cserhát" && negy === "Mecsek" && ot === "Pilis" && pontok == 4) {
        pontok = 5;
    } else if (egy === "Budai-hegység" && ketto === "Zselic" && harom === "Cserhát" && negy === "Mecsek" && ot === "Pilis" && pontok == 2) {
        pontok = 3;
    } else if (egy === "Budai-hegység" && ketto === "Zselic" && harom === "Cserhát" && negy === "Mecsek" && ot === "Pilis" && pontok == 0) {
        pontok = 1;
    } else if (egy === "Mecsek" && ketto === "Zselic" && harom === "Cserhát" && negy === "Keszthelyi-hegység" && ot === "Vértes" && pontok == 4) {
        pontok = 5;
    } else if (egy === "Mecsek" && ketto === "Zselic" && harom === "Cserhát" && negy === "Keszthelyi-hegység" && ot === "Vértes" && pontok == 2) {
        pontok = 3;
    } else if (egy === "Mecsek" && ketto === "Zselic" && harom === "Cserhát" && negy === "Keszthelyi-hegység" && ot === "Vértes" && pontok == 0) {
        pontok = 1;
    } else if (egy === "Budai-hegység" && pontok == 4) {
        pontok = 1;
    } else if (egy === "Budai-hegység" && pontok == 2) {
        pontok = 0;
    }
    else if (egy === "Budai-hegység" &&ketto === "Gerecse"&& pontok == 4) {
        pontok = 2;
    }else if (egy === "Budai-hegység" &&ketto === "Gerecse"&& pontok == 2) {
        pontok = 0;
    } else if (egy === "Budai-hegység" &&ketto === "Gerecse"&& pontok == 0) {
        pontok = 0;
    }else if (egy != "Budai-hegység" &&ketto === "Gerecse"&& pontok == 4) {
        pontok = 1;
    } else if (egy != "Budai-hegység" &&ketto === "Gerecse"&& pontok == 2) {
        pontok = 0;
    } else if (egy === "Gerecse" &&ketto === "Keszthelyi-hegység"&& pontok == 4) {
        pontok = 2;
    } else if (egy === "Gerecse" &&ketto === "Keszthelyi-hegység"&& pontok == 2) {
        pontok = 0;
    } else if (egy != "Gerecse" &&ketto === "Keszthelyi-hegység"&& pontok == 4) {
        pontok = 0;
    } else if (egy != "Gerecse" &&ketto === "Keszthelyi-hegység"&& pontok == 2) {
        pontok = 0;
    }
    else {
        pontok = 0;
    }
    return pontok;
}
// 3 feladat  pont: 12,10,7,8,5,3,1,0

function negyesFeladat() {
    let pontok = HarmadikFeladat();
    let negyes=document.querySelector('input[name="galya"]');
    
    if (negyes.value==="Mátra"&&pontok==12) {
        pontok=14;
    } else if (negyes.value==="Mátra"&&pontok==10) {
        pontok=12;
    } else if (negyes.value==="Mátra"&&pontok==8) {
        pontok=10;
    } else if (negyes.value==="Mátra"&&pontok==7) {
        pontok=9;
    } else if (negyes.value==="Mátra"&&pontok==5) {
        pontok=7;
    } else if (negyes.value==="Mátra"&&pontok==3) {
        pontok=5;
    } else if (negyes.value==="Mátra"&&pontok==1) {
        pontok=3;
    } else if (negyes.value==="Mátra"&&pontok==2) {
        pontok=4;
    } else if (negyes.value==="Mátra"&&pontok==0) {
        pontok=2;
    }  else if (negyes.value==="matra"&&pontok==10) {
        pontok=12;
    } else if (negyes.value==="matra"&&pontok==12) {
        pontok=14;
    } else if (negyes.value==="matra"&&pontok==8) {
        pontok=10;
    } else if (negyes.value==="matra"&&pontok==7) {
        pontok=9;
    } else if (negyes.value==="matra"&&pontok==5) {
        pontok=7;
    } else if (negyes.value==="matra"&&pontok==3) {
        pontok=5;
    } else if (negyes.value==="matra"&&pontok==1) {
        pontok=3;
    } else if (negyes.value==="matra"&&pontok==2) {
        pontok=4;
    } else if (negyes.value==="matra"&&pontok==0) {
        pontok=2;
    } else if (negyes.value==="Mátra"&&pontok==12) {
        pontok=14;
    }
    return pontok;
}
function Fasz() {
    let harmadik = negyesFeladat();
    alert(`Pontja: ${harmadik}`);

}
function main() {

}
main();