const rhoKupfer = 56;
const rhoAlu = 37;
const normQuerschnitte = [1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300];          

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
    }
    }


function calcSpannungsfall(){
    return (2*kabel.laenge*kabel.strom*kabel.cosPhi)/(rhoKupfer*kabel.spannungsfall.erlaubt*kabel.spannung);
}

function getNextSection(quer){
    
    for ( querschnitt in normQuerschnitte) {
        if (querschnitt>quer){
            return querschnitt
        }  
        }
    }