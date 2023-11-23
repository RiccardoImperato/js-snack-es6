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
    },
    {
        bikeName: 'Blue',
        bikeWeigth: 6
    },
    {
        bikeName: 'Gialla',
        bikeWeigth: 4
    }
];

// Peso  minimo
let minweight = Number.MAX_VALUE;

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    if (bike.bikeWeigth < minweight) {
        minweight = bike.bikeWeigth;
    }
};

console.log(minweight);

// Bici più leggera
const lighterBike = bikes.filter((bike) => {
    return bike.bikeWeigth === minweight;
}).map((bike) => `La bici ${bike.bikeName} è la più leggera con un peso di ${bike.bikeWeigth} kg`);

console.log(lighterBike);


// Stampa a schermo
const container = document.querySelector('.container');

container.append(lighterBike);