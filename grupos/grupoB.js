//import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Viernes 25/11',
    lugar: [
        'Estadio Ahmad Bin Ali - 07:00 hs',
        'Estadio Al Bayt - 16:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Martes 29/11',
    lugar: [
        'Estadio Ahmad Bin Ali - 16:00 hs',
        'Estadio Al Thumama - 16:00 hs.'
    ]
};

console.log('b');
console.log(fecha2, fecha3);

completarPartidos('b', fecha2, fecha3);