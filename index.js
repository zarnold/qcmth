/**
 *
 *  Main File for testing modules
 * 
 */
 
 import Complex from '/modules/complex.js'
 import Vector from '/modules/vector.js'
 import Matrix from '/modules/matrix.js'

 let z=new Complex(-4, 12);
 let w=new Complex(-3, -2);
console.log(w.hasOwnProperty('conjugate'))
 console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
 let v = new Vector([5,6.232323,z.conjugate(),z,-12.2222])
 v.log();
 v.conjugate();
 v.log();
 console.log(".............................");
 let v1=new Vector([w,z,w.conjugate(),w,z])
 v1.log();
 v1.scalarMult(2);
 v1.log();
 v1.scalarMult(z);
 v1.log();
 console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
 let t= Vector.add(v,v1);
 v.log();
 v1.log();
 t.log();



 

