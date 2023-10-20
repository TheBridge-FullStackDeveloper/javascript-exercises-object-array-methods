// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  // Aquí tu código
  return Object.values(object).reduce(
    (acumulator, element) => acumulator + element,
    0
  );
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  // Aquí tu código
  const ages = Object.values(object);
  return (
    ages.reduce((acumulator, element) => acumulator + element, 0) / ages.length
  );
  /*   return (
    Object.values(object).reduce(
      (acumulator, element) => acumulator + element,
      0
    ) / Object.values(object).length
  ); */
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  // Aquí tu código
  const objectKey = Object.keys(object);
  const objectValues = Object.values(object);
  let resultArray = [];
  for (let i = 0; i < objectKey.length; i++) {
    resultArray[i] = {};
    resultArray[i].name = objectKey[i];
    resultArray[i].age = objectValues[i];
  }
  return resultArray;
}
// return Object.entries(object).map(([name, age]) => ({ name, age }));

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  // Aquí tu código
  let fruitQuantity = Object.entries(object).map(([fruit, quantity]) => ({
    fruit,
    quantity,
  }));
  return fruitQuantity.filter((fruit) => fruit.quantity > 10);
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  return Object.entries(object).reduce(
    (acc, [key, value]) => acc + key.length + value.length,
    0
  );
}
/*     const propertySum = Object.keys(object).join("").length;
    const valueSum = Object.values(object).join("").length;
    return (total = propertySum + valueSum); */
