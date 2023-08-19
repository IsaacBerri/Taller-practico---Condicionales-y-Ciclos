// En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo
// que encuentre el promedio de edades de los estudiantes mayores de 21 años y el
// promedio de edades del resto de estudiantes. Por cada estudiante se tiene un
// registro que contiene su código y edad.

// const estudiantes = [
//     { codigo: 1, edad: 20 },
//     { codigo: 2, edad: 22 },
//     { codigo: 3, edad: 19 },
//     { codigo: 4, edad: 25 },
//     { codigo: 5, edad: 31 },
//     { codigo: 6, edad: 18 },
//     { codigo: 7, edad: 27 },
//     { codigo: 8, edad: 38 },
// ];

// let promedioMayores21 = 0;
// let promedioMenores21 = 0;
// let cantidadMayores21 = 0;
// let cantidadMenores21 = 0;

// for (let i = 0; i < estudiantes.length; i++) {
//     const estudiante = estudiantes[i];
//     if (estudiante.edad > 21) {
//         promedioMayores21 += estudiante.edad;
//         cantidadMayores21++;
//     } else {
//         promedioMenores21 += estudiante.edad;
//         cantidadMenores21++;
//     }
// }

// if (cantidadMayores21 > 0) {
//     promedioMayores21 /= cantidadMayores21;
// }

// if (cantidadMenores21 > 0) {
//     promedioMenores21 /= cantidadMenores21;
// }

// console.log(`Promedio de edades de estudiantes mayores de 21 años: ${promedioMayores21}`);
// console.log(`Promedio de edades de estudiantes menores o iguales a 21 años: ${promedioMenores21}`);
