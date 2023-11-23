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
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

// Generazione dati random
teams.forEach(team => {
    team.puntiFatti = getRandomInt(100);
    team.falliSubiti = getRandomInt(50);
})

console.log(teams);

// Nuovo array con nome e falli subiti
const teamsFauls = teams.map((team) => {
    console.log(`Squadra: ${team.nome}
    
Falli subiti: ${team.falliSubiti}`);
    return `${team.nome} - ${team.falliSubiti}`;
})

console.log(teamsFauls);