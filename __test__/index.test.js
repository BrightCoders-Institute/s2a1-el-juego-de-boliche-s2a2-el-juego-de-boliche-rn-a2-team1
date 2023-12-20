const BowlingGame = require('../index');

describe('BowlingGame', () => {
  let bowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  test('Calcula que el primer no sea igual a 0', () => {
    bowlingGame.roll(); // Realiza un lanzamiento
    expect(bowlingGame.getScore()[0]).not.toEqual(0); // evalua que el primer frame no es igual a 0, este puede variar porque los numeros son random y puede salir lo que es un 0
  });

  test('El iultimo frame no puede llegar a 300 ', () => {
    bowlingGame.roll(); // Realiza un lanzamiento
    expect(bowlingGame.getScore()[9]).not.toEqual(300); 
  });

});
