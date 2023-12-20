class BowlingGame {
    constructor() {
      // Inicializamos el juego con 10 frames, cada uno con un objeto que contiene los lanzamientos y la puntuación.
      this.frames = Array.from({ length: 10 }, () => ({ rolls: [], score: 0 }));
      // Variable para rastrear el frame actual.
      this.currentFrame = 0;
    }
  
    // Método para registrar un lanzamiento.
    roll() {
      // Verificamos si el juego ha terminado.
      if (this.isGameOver()) {
        console.log("El juego ha terminado.");
        return;
      }
  
      // Obtenemos el frame actual.
      const frame = this.frames[this.currentFrame];
  
      // Generamos puntajes aleatorios para el primer y segundo lanzamiento.
      const firstRoll = this.getRandomValue();
      const secondRoll = frame.rolls.length === 0 ? this.getRandomValue(true) : this.getRandomValue();
  
      // Añadimos el puntaje del primer lanzamiento al array de lanzamientos del frame.
      frame.rolls.push(firstRoll);
  
      // Si no fue un strike, añadimos el puntaje del segundo lanzamiento al array.
      if (frame.rolls.length === 1 && firstRoll < 10) {
        frame.rolls.push(secondRoll);
      }
  
      // Si es un strike o se han realizado dos lanzamientos, calculamos la puntuación y pasamos al siguiente frame.
      if (this.isStrike(frame) || frame.rolls.length === 2) {
        this.calculateScore();
        this.currentFrame++;
      }
    }
  
    // Método para calcular la puntuación total del juego.
    calculateScore() {
      let totalScore = 0;
  
      this.frames.forEach((frame, index) => {
        // Si es un strike, sumamos 10 más la bonificación.
        if (this.isStrike(frame)) {
          frame.score = 10 + this.getStrikeBonus(index);
        }
        // Si es un spare, sumamos 10 más la bonificación.
        else if (this.isSpare(frame)) {
          frame.score = 10 + this.getSpareBonus(index);
        }
        // Si no es un strike ni un spare, sumamos el total de los lanzamientos.
        else {
          frame.score = frame.rolls.reduce((acc, pins) => acc + pins, 0);
        }
  
        // Actualizamos la puntuación acumulativa del frame.
        totalScore += frame.score;
        frame.score = totalScore;
      });
    }
  
    // Método para obtener un valor aleatorio (puntaje de un lanzamiento).
    getRandomValue(canBeTen = false) {
      const max = canBeTen ? 10 : 9;
      return Math.floor(Math.random() * (max + 1));
    }
  
    // Método para obtener la bonificación por un strike.
    getStrikeBonus(frameIndex) {
      const nextFrame = this.frames[frameIndex + 1];
      const twoFramesAhead = this.frames[frameIndex + 2];
  
      // Si hay un próximo frame y se realizó al menos un lanzamiento.
      if (nextFrame && nextFrame.rolls.length >= 1) {
        // Si el próximo frame también es un strike, sumamos el puntaje de los dos próximos lanzamientos.
        if (this.isStrike(nextFrame)) {
          return 10 + twoFramesAhead.rolls[0];
        }
        // Si no es un strike, sumamos el puntaje de los dos lanzamientos del próximo frame.
        else {
          return nextFrame.rolls[0] + (nextFrame.rolls[1] || 0);
        }
      }
  
      return 0;
    }
  
    // Método para obtener la bonificación por un spare.
    getSpareBonus(frameIndex) {
      const nextFrame = this.frames[frameIndex + 1];
      // Si hay un próximo frame, sumamos el puntaje del primer lanzamiento.
      return nextFrame ? nextFrame.rolls[0] : 0;
    }
  
    // Método para verificar si un frame es un strike.
    isStrike(frame) {
      return frame.rolls.length === 1 && frame.rolls[0] === 10;
    }
  
    // Método para verificar si un frame es un spare.
    isSpare(frame) {
      return frame.rolls.length === 2 && frame.rolls[0] + frame.rolls[1] === 10;
    }
  
    // Método para verificar si el juego ha terminado.
    isGameOver() {
      return this.currentFrame === 10;
    }
  
    // Método para obtener la puntuación de cada frame.
    getScore() {
      return this.frames.map(frame => frame.score);
    }
  }
  
  // Uso del juego de bolos con puntajes aleatorios.
  const bowlingGame = new BowlingGame();
  
  // Simulamos 10 frames de lanzamientos aleatorios.
  for (let i = 0; i < 10; i++) {
    bowlingGame.roll();
  }
  
  // Imprimimos la puntuación final del juego.
  console.log("Puntuación final:", bowlingGame.getScore());
  console.log(bowlingGame.frames);
  console.log("juego terminado");
  

// codigo anterior

// const frame = 10;
// const strike = 10;
// const spare = 10;
// let puntaje = 0;
// let bolos = 10;

// const shotInFrame = () => {
//     for (let l = 1; l <= 1; l++) {
//         puntaje += shot();
//     }

//     console.log(puntaje);
// };

// const shot = () => {
//     let result = 0;
//     let firstShot = getRandomValue();

//     if (firstShot === 10) {
//         return strike;
//     } else {
//         bolos -= firstShot;
//     }

//     let secondShot = getRandomValue();
//     result = firstShot + secondShot;
//     return result;
// };

// // funcion para generar valores random de los bolos tirados.
// const getRandomValue = () => {
//     return Math.floor(Math.random() * 10);
// };

// shotInFrame();
