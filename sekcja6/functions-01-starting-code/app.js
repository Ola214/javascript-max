const startGameBtn = document.getElementById('start-game-btn');

function start() {
    console.log('Game is starting...');
};

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.log(typeof startGame());

startGameBtn.addEventListener('click', start);