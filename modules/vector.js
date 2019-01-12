export default class Vector {

    constructor(coefList=[0]) {
        this.rank = coefList.length;
        this.coef = coefList;
    }

    static add(v1,v2) {

    }

    static multiply(v1,v2) {

    }

    toString() {
        console.log(this.coef)
        let s  = this.coef.map( (el) => (el.toString())).join(',');

        return `[${s}]`;
    }

    log() {
       console.log(this.toString())
    }
}