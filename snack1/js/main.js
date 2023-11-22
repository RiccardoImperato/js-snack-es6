'use strict';

// Array bici da corsa
const bikes = [

    {
        bikeName: 'Rossa',
        bikeWeigth: 3
    },
    {
        bikeName: 'Bianca',
        bikeWeigth: 2
    },
    {
        bikeName: 'Verde',
        bikeWeigth: 4
    }

];

// Destruttura oggetti e stampa a schermo
const container = document.querySelector('.container');

bikes.forEach(element => {
    const { bikeName, bikeWeigth } = element;
    console.log(`Nome bici: ${bikeName}`);
    console.log(`Peso: ${bikeWeigth}`);
})

container.innerHTML = (`<div>La bici più leggera è: ${bikes[1].bikeName},
che pesa ${bikes[1].bikeWeigth} kg</div>`);