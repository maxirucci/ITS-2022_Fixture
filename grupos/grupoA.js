//import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Viernes 25/11',
    lugar: [
        'Estadio Al Thumama - 10:00 hs',
        'Estadio Internacional Khalifa - 13:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Martes 29/11',
    lugar: [
        'Estadio Al Bayt - 12:00 hs',
        'Estadio Internacional Khalifa - 12:00 hs.'
    ]
};

console.log('a');
console.log(fecha2, fecha3);

completarPartidos('a', fecha2, fecha3);