// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // const moreNumbers2 = new Array(5); // [, , , ,];
// // // console.log(moreNumbers2);

// // // const moreNumber = Array(5, 2);

// // // const yetMoreNumbers = Array.of(1, 2);
// // // console.log(yetMoreNumbers);

// // const moreNumbers = Array.from('Hi'); // ["H", "i"]

// // const listItems = document.querySelectorAll('li'); // Array like object
// // console.log(listItems);

// // const arrayListItems = Array.from(listItems);
// // console.log(arrayListItems);

// // const analyticsData = [
// //     [1, 1.6],
// //     [3, 4]
// // ];
// // for (const data of analyticsData) {
// //     for (dataPoint of data) {
// //         console.log(dataPoint);
// //     }
// // }
// // console.log(personalData[1]);

// // const hobbies = ['Sports', 'Cooking'];
// // hobbies.push('Reading'); //dodaje na końcu
// // console.log(hobbies);

// // hobbies.unshift('Coding'); //dodaje na początku
// // const poppedValue = hobbies.pop(); //usuwa element
// // hobbies.shift(); //usuwa element na początku tablicy

// // hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // jeżeli jest mniej elementów to dodaje po między puste elementy

// // hobbies.splice(1, 0, 'Good food');
// // console.log(hobbies)
// // hobbies.splice(0, 1);

// // const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(); //dobre do kopiowania

// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;
// // const taxAdjustedPrices = [];

// // // for (const price of prices) {
// // //     taxAdjustedPrices.push(price * (1 + tax));
// // // }

// // prices.forEach((price, idx, prices) => {
// //     const priceObj = {
// //         index: idx,
// //         taxAdjPrice: price * (1 + tax)
// //     };
// //     taxAdjustedPrices.push(priceObj);
// // });

// // console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = {
//         index: idx,
//         taxAdjPrice: price * (1 + tax)
//     };
//     return priceObj;
// })

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum +=price
// // });

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';')

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');

// const copiedNameFragments = [...nameFragments];

// Math.min(...prices);

// const persons = [{
//     name: 'Max',
//     age: 30
// }, {
//     name: 'Manuel',
//     age: 31
// }];
// const copiedPersons = [...persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))];


// const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const [firstName, lastName, ...otherInformation] = nameData;

// const ids = new Set([1, 2, 3]);
// ids.add(2);

// if (ids.has('Hi')) {
//     ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//     console.log(entry);
// }

// const person1 = {
//     name: 'Max'
// };
// const person2 = {
//     name: 'Manuel'
// };

// const personData = new Map([
//     [person1, [{
//         date: 'yesterday',
//         price: 10
//     }]]
// ]);

// personData.set(person2, [{
//     date: 'two weeks ago',
//     price: 100
// }]);

// console.log(personData);
// personData.get(person1);

// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }
// for (const key of personData.keys()) {
//     console.log(key);
// }
// for (const value of personData.values()) {
//     console.log(value);
// }

// console.log(personData.size);

let person = {
    name: 'Max'
};
const persons = new WeakSet();
persons.add(person);

person = null; //persons będą puste dzięki weeksetowi


const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;