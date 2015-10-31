
var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cuál de los dos elementos de texto es mayor

console.log(" Hola es mayor que adios, " + (valores[3] > valores[4]));


// Utilizando exclusivamente los dos valores booleanos del array, 
// determinar los operadores necesarios 
// para obtener un resultado true y otro resultado false

console.log(" 5 > 2 = " + (valores[1] > valores[5]));
console.log(" 5 < 2 = " + (valores[1] < valores[5]));


// Determinar el resultado de las cinco operaciones matemáticas 
// realizadas con los dos elementos numéricos

console.log(" 5 + 2 = " + (valores[1] + valores[5]));
console.log(" 5 + 2 = " + (valores[1] - valores[5]));
console.log(" 5 + 2 = " + (valores[1] * valores[5]));
console.log(" 5 + 2 = " + (valores[1] / valores[5]));
console.log(" 5 + 2 = " + (valores[1] % valores[5]));