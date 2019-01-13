import Complex from './complex.js'

export default class Vector {

    constructor(coefList = [0]) {
        this.rank = coefList.length;
        this.coef = coefList.map( (el) => (
            new Complex( el.hasOwnProperty('re') ? el.re:el, el.hasOwnProperty('im') ? el.im:0)
        ));
        this.vertical = true;
    }

    static add(v1, v2) {
        if (v1.rank != v2.rank) return undefined;

        let v = new Array(v1.rank).fill(0);
        v = v.map( (el,idx)=>(Complex.add(v1.coef[idx] , v2.coef[idx])));
        console.log("tttt")
        console.log(v);
        return new Vector(v);        
    }

    static multiply(v1, v2) {

    }

    scalarMult(r=0) {
        this.coef  = this.coef.map( (el) =>(Complex.multiply(el, r)));
    }

    transpose() {
        this.vertical = !this.vertical;
    }

    conjugate() {
        this.coef = this.coef.map( (el) => ('conjugate' in el ? el.conjugate() : parseFloat(el)))
    }

    toString() {
        let s;
        if (this.vertical == true)
            s = this.coef.map((el) => (el.toString())).join(',\n');
        else
            s = this.coef.map((el) => (el.toString())).join(',');

        return `[${s}]`;
    }

    log() {
        console.log(this.toString())
    }
}