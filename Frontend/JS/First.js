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

// const s = ['любовь', 'котик', 'мили бро', 'красота', 'восторг'];
// // console.log(s.length);
// // console.log(s.toUpperCase());
// // console.log(s.toLowerCase());
// // console.log(s.indexOf('world')); // index of substring]
// // console.log(s.substring(0, 5));
// // console.log(`Пчелка это: ${s}`)
// // //console.log(s.split(", ")); // split string by substring
// // console.log(s);
// // s.push('навсегда');
// // console.log(s);
// const bee ={
//     name: 'Пчелка',
//     age: 23,
//     advantages: ['любовь', 'котик', 'мили бро', 'красота', 'восторг'],
// }

// console.log(bee.advantages[2]);
// const {age} = bee;
// console.log(age);
// bee.boyfriend = 'Котик';
// console.log(bee);

// //Arrays
// const todos = [
//     {
//     id: 1,
//     text: 'Стать самым лучшим для пчелки',
//     isCompleted: false
//     },
//     {
//     id: 2,
//     text: 'Начать изучать JavaScript',
//     isCompleted: true
//     },
//     {
//     id: 3,
//     text: 'Создать лучшую семью для пчелки',
//     isCompleted: false
//     }
// ]
// console.log('--- Arrays ---');
// console.log(todos);
// console.log(todos[0]);

// console.log('--- JSON ---');
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// //For Loop
// console.log('--- For Loop ---');
// for (let i=0; i < todos.length; i++) {
//     console.log(`Задача ${i+1}: ${todos[i].text}`)
// }

// //While Loop
// console.log('--- While Loop ---');
// let i = 0;
// while (i < todos.length) {
//     console.log(`Задача ${i+1}: ${todos[i].text}`);
//     i++;
//}
// for (let todo of todos) {
//     console.log(todo);
// }


//For Each, map, filter
// console.log('--- For Each ---');
// todos.forEach(function(todo) {
//     console.log(todo.text);
// })
// console.log('--- Map ---');
// const todoText = todos.map(function(todo) {
//     return todo.text;
// })

// console.log(todoText);

// console.log('--- Filter ---');
// const todoisComlited = todos.filter(function(todo) {
//     return todo.isCompleted === false;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoisComlited);


// Conditional Statements (Условные операторы if, else if, else)

// const x = 11;
// if (x === 10) { //если data types different, то для true можно использовать ==. Если нужно строгое сравнение, то используйте ===
//     console.log('x равен 10');
// } else if (x > 10) {
//     console.log('x больше 10');
// } else {
//     console.log('x меньше 10');
// }

// Logical Operators (Логические операторы: &&, ||)
// const x = 5;
// const y = 10;
// if (x > 4 || y > 10) {
//     console.log('x больше 4 or y больше 10');
// }
// const x = 5;
// const y = 10;
// if (x > 4 && y >= 10) {
//     cownsole.log('x больше 4 and y больше 10');
// }


// Ternary Operator (Тернарный оператор)
// const x = 11;
// const color = x > 10 ? 'blue' : 'yellow';
// console.log(color);

// //switches
// switch (color) {
//     case 'yellow':
//         console.log('Пчелка победила!');
//         break;
//     case 'blue':
//         console.log('Котик победил!');
//         break;
//     default:
//         console.log('Ничья!');
//         break;
// }