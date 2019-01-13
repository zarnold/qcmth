export default class Complex {

    constructor(real=0, imaginary=0) {
        this.re = real;
        this.im = imaginary
    }

    static add(a,b) {
        let a1 = a.hasOwnProperty('re') ? a.re : parseFloat(a),
            a2 = b.hasOwnProperty('re') ? b.re : parseFloat(b),
            b1 = a.hasOwnProperty('im') ? a.im : 0,
            b2 = b.hasOwnProperty('im') ? b.im : 0;

        return new Complex(a1+a2, b1+b2 );
    }

    static multiply(a,b) {
        let a1 = a.hasOwnProperty('re') ? a.re : parseFloat(a),
            a2 = b.hasOwnProperty('re') ? b.re : parseFloat(b),
            b1 = a.hasOwnProperty('im') ? a.im : 0,
            b2 = b.hasOwnProperty('im') ? b.im : 0;
                
        return new Complex(a1*a2 - b1*b2, a1*b2+a2*b1 );
    }

    conjugate() {
        let a1 = this.re,
            b1 = this.im
                
        return new Complex(a1, -1 * b1);
    };

    norm(){
        let a1 = this.re,
            b1 = this.im;
                
        return (a1**2 + b1**2)**0.5;
    };

    toString() {
        let sign = this.im < 0 ? '-' : '+';
        return(`${this.re} ${sign} ${Math.abs(this.im)}i`);
    }
    log() {
        let sign = this.im < 0 ? '-' : '+';
        console.log(`${this.re} ${sign} ${Math.abs(this.im)}i `);
    }
}