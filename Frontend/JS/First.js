// console.log("Мы любим тебя, пчелка!");
// console.error("Это ошибка, но мы все равно любим тебя, пчелка!");
// console.warn("Это предупреждение, но мы все равно любим тебя, пчелка!");

// // Урок с курса: https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s
// // var, let, const
// // var - устаревший способ объявления переменных, не рекомендуется использовать

// let name = "Пчелка";
// name = "Котик"; //поменяли значение переменной
// //const name2 = "Пчелка"; //константа, значение не меняется
// //name2 = "Котик"; // ошибка, так как константа не может быть изменена
// console.log(name);
// //console.log(name2);

// let love;
// love = "Пчелка"; // изменили значение переменной
// console.log(love);

// // Остановился на 14:20

// // 29/06/2025
// // String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const name3 = "Пчелка"; // String
// const age = 23; // Number
// const height = 1.76; // Number (может быть дробным)
// const isLoveme = true; // Boolean 
// const disadvantage = null // Null (отсутствие значения)
// const arrived = undefined; // Undefined (переменная объявлена, но не инициализирована)
// let left; // Undefined тоже

// console.log(typeof disadvantage); // return type of variable

// // Concatenation (Склеивание строк) - старый способ
// console.log('Моя любовь - это ' + name3 + ', ей ' + age)
// // Template Literals (Шаблонные строки) - новый способ
// console.log(`My love is ${name3}, she is ${age} years old`);

const s = 'любовь, котик, мили бро, красота, восторг';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.indexOf('world')); // index of substring]
// console.log(s.substring(0, 5));
console.log('Пчелка это:')
console.log(s.split(", ")); // split string by substring
//test