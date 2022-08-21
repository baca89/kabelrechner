const rhoKupfer = 56;
//TODO Variable mit Normquerschnitten erweitern
const normQuerschnitte = [1, 1.5, 2.5, 4];


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
//TODO: Berechnung einfügen

function calcSpannungsfall(){
    //TODO füllen mit leben
}

function getNextSection(quer){
    //TODO Funktion getNextSection füllen
}