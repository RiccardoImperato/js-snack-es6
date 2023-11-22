'use strict';

//Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//Functions

// array squadre
const teams = [
    {
        nome: 'Inter',
        puntiFatti: getRandomInt(90),
        falliSubiti: getRandomInt(50)
    },
    {
        nome: 'Milan',
        puntiFatti: getRandomInt(90),
        falliSubiti: getRandomInt(50)
    }, {
        nome: 'Juve',
        puntiFatti: getRandomInt(90),
        falliSubiti: getRandomInt(50)
    }, {
        nome: 'Napoli',
        puntiFatti: getRandomInt(90),
        falliSubiti: getRandomInt(50)
    }, {
        nome: 'Roma',
        puntiFatti: getRandomInt(90),
        falliSubiti: getRandomInt(50)
    },
];

console.log(teams);

// Nuovo array con nome e falli subiti
const teamsFauls = teams.map((element) => {
    console.log(`Squadra: ${element.nome}
    
Falli subiti: ${element.falliSubiti}`);
    return `${element.nome} - ${element.falliSubiti}`;
})

console.log(teamsFauls);