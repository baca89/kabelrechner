const rhoKupfer = 56;

// TODO übrige Normquerschnitte einfügen [Datenpflege]
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


function calcSpannungsfall(){
    //   TODO Berechnung des Spannungsfalls einfügen [bug]
}

function getNextSection(quer){
    //  TODO Funktion für nächsthöheren Normquerschnitt fehlt [feature]
}