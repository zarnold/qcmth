/**
 *
 *  Main File for testing modules
 * 
 */
 
 import Complex from '/modules/complex.js'
 import Vector from '/modules/vector.js'
 import Matrix from '/modules/matrix.js'

 let z=new Complex(-4, -12);
 let w=new Complex(-3, -2);

 let v1 = new Vector([2,3,4]);
 v1.log();

 z.log();
 w.log();

 v1=new Vector([w,z,w.conjugate(),w,z])
 v1.log();


 z.conjugate().log();
console.log(z.toString());

 let y = Complex.add(z,w);
 console.log("y =");
 y.log();

 y = Complex.multiply(z,w);
 console.log("y =");
 y.log();

 

