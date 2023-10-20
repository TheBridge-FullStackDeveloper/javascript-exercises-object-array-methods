// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej object: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  // Aquí tu código
  const sum = Object.values(object);
  const result = sum.reduce((acc, curr) => acc + curr, 0);
  return result;
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  // Aquí tu código
  const sum = Object.values(object);
  const result = sum.reduce((acc, curr) => acc + curr, 0);
  return result / sum.length;
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  // Aquí tu código
  const newArray = [];
  const keys = Object.keys(object);

  for (i = 0; i < keys.length; i++) {
    const newObject = {
      name: keys[i],
      age: object[keys[i]],
    };
    console.log(newObject);
    newArray.push(newObject);
  }
  return newArray;
}

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  // Aquí tu código
  let Result = [];
  const newArray = Object.entries(object);

  for (i = 0; i < newArray.length; i++) {
    const newObj = {
      fruit: newArray[i][0],
      quantity: newArray[i][1],
    };
    console.log(newObj);
    if (newObj["quantity"] > 10) {
      Result.push(newObj);
    }
  }
  return Result;
  console.log(Result);
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

let book = {
  titulo: "El señor de los anillos",
  autor: "J.R.R. Tolkien",
  genero: "Fantasía",
};

function getCharacterCount(object) {
  // Aquí tu código
  const myArray = Object.entries(object);
  console.log(myArray);
  const newArray = myArray.join();
  console.log(newArray);
  const comma = ",";
  const withoutComma = [...newArray].filter((element) => element !== comma);
  return withoutComma.length;
}

console.log(getCharacterCount(book));
