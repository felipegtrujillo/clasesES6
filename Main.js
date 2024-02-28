
import { Cliente } from './src/Cliente.js'; 

let cliente1= new Cliente('Alejandro Jodorowsky', 2000000, 500);
console.log(cliente1.nombre);
console.log(`El impuesto para ${cliente1.nombre} es de ${cliente1.CalcularImpuestos()} `);

cliente1.impuestos.montoBrutoAnual = 212321323;
console.log(`El nuevo impuesto para ${cliente1.nombre} es de ${cliente1.CalcularImpuestos()} `);

let cliente2= new Cliente('Albert Einstein', 70000000, 900);
console.log(cliente2.nombre);
console.log(`El impuesto para ${cliente2.nombre} es de ${cliente2.CalcularImpuestos()} `);

cliente2.impuestos.deducciones = 150000;
console.log(`El nuevo impuesto para ${cliente2.nombre} es de ${cliente2.CalcularImpuestos()} `);

let cliente3= new Cliente('Michael Jackson', 7000000000000, 900);
console.log(cliente3.nombre);
console.log(`El impuesto para ${cliente3.nombre} es de ${cliente3.CalcularImpuestos()} `);
cliente3.nombre = "Juanito Jackson";
cliente3.impuestos.montoBrutoAnual = 1000;
cliente3.impuestos.deducciones = 10;
console.log(`El cliente se cambio el nombre a ${cliente3.nombre} y su nuevo impuesto es de ${cliente3.CalcularImpuestos()} `);


