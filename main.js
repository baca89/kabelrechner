const rhoKupfer = 56;
const rhoAlu = 37;
const normQuerschnitte = [1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300];          
const express = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

var kabel={
    laenge          :   0,
    strom           :   0,
    spannung        :   0,
    cosPhi          :   0,
    spannungsfall   :   {
        erlaubt     :   0,
        berechnet   :   0
    },
    querschnitt     :   {
        berechnet   :   0,
        norm        :   0
    },
    phasen          :   0
    }


function calcSpannungsfall(phasen){
    //TODO Auswahl Leitermaterial einfügen
    let rho = rhoKupfer;

    switch (phasen) {
        case 0:
            return 0;       //TODO Spannungsfall für Gleichstrom ergänzen
        case 1:
            return 2 * kabel.laenge * kabel.strom * kabel.cosPhi / rho / kabel.spannungsfall.erlaubt;
        case 3:
            return Math.sqrt(3) * kabel.laenge * kabel.strom * kabel.cosPhi / rho / kabel.spannungsfall.erlaubt;
        default:
            return 0;
    }
}

function getNextSection(quer){
    
    for ( querschnitt in normQuerschnitte) {
        if (querschnitt>quer){
            return normQuerschnitte[querschnitt];
        }  
        }
    }

    function calcStromFromLeistung (leistung, phasen){
        switch (phasen) {
            case 0:
                return leistung / kabel.spannung;
            case 1:
                return leistung / kabel.spannung / kabel.cosPhi;
            case 3:
                return leistung / kabel.spannung / kabel.cosPhi / Math.sqrt(3);
            default:
                return 0;
        }
    }
function setKabelWerte(){
    //TODO Werte von Formular einlesen;
    kabel.laenge = 65;
    kabel.spannung = 400;
    kabel.cosPhi = 0.8;
    kabel.spannungsfall.erlaubt = kabel.spannung*0.03;
    //TODO Abfrage ob Leistung oder Strom
    kabel.strom = 35;
    kabel.phasen = 3;
}
    

function kabelberechnung(){
    setKabelWerte()
    kabel.querschnitt.berechnet=calcSpannungsfall(kabel.phasen);
    kabel.querschnitt.norm=getNextSection(kabel.querschnitt.berechnet);
    console.log (kabel);
}