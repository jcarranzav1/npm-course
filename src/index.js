const messages = [
  'Juan',
  'Oscar',
  'Sofia',
  'Alejandro',
  'David',
  'Diana',
  'Ana Maria',
  'Isabela',
  'Antonio',
  'Norma',
  'Carolina',
  'Cristina',
];
const index = messages.length;
function randomMsg() {
  const message = messages[Math.floor(Math.random() * index)];
  console.log(message);
}
module.exports = {
  randomMsg,
};
