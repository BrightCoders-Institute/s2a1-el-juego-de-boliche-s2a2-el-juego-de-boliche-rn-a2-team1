const frame = 10;
const strike = 10;
const spare = 10;
let puntaje = 0;
let bolos = 10;

const shotInFrame = () => {
    for (let l = 1; l <= 1; l++) {
        puntaje += shot();
    }

    console.log(puntaje);
};

const shot = () => {
    let result = 0;
    let firstShot = getRandomValue();

    if (firstShot === 10) {
        return strike;
    } else {
        bolos -= firstShot;
    }

    let secondShot = getRandomValue();
    result = firstShot + secondShot;
    return result;
};

// funcion para generar valores random de los bolos tirados.
const getRandomValue = () => {
    return Math.floor(Math.random() * 10);
};

shotInFrame();
