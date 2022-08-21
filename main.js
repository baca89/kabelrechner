class kabelrechner{
    //TODO: entfernen der Klasse und umschreiben auf Funktionen
    static kabel ={};
    static rhoKupfer = 56;

    constructor(){
        this.kabel.laenge=0;
        this.kabel.querschnitt=0;
        this.kabel.strom=0;
        this.kabel.spannungsfall=0;
        this.kabel.spannung=0;
        this.kabel.cosPhi=0;
    }

    /**
     * @param {number} laenge
     */
    set laenge(laenge){
        this.kabel.laenge=laenge;
    }
    /**
     * @param {number} strom
     */
    set strom(strom){
        this.kabel.strom=strom;
    }
    /**
     * @param {number} leistung
     */
    set leistung(leistung){
        this.kabel.strom = leistung/this.kabel.spannung
    }
    /**
     * @param {number} spannung
     */
    set spannung(spannung){
        this.kabel.spannung=spannung;
    }
    /**
     * @param {number} spannungsfall
     */
    set spannungfall(spannungsfall){
        this.kabel.spannungfall=this.spannungfall;
    }


    calcSpannungsfall() {
        this.kabel.querschnitt=(2*this.kabel.laenge*this.kabel.strom*this.kabel.cosPhi)/(rhoKupfer*this.kabel.spannungfall*this.kabel.spannung)
    }
//TODO: Berechnung erweitern
}

