// import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Domingo 27/11',
    lugar: [
        'Estadio Al Thumama - 10:00 hs',
        'Estadio International Khalifa - 13:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Jueves 01/12',
    lugar: [
        'Estadio Ahmad - 16:00 hs',
        'Estadio Al Thumana - 16:00 hs.'
    ]
};

completarPartidos('f', fecha2, fecha3);