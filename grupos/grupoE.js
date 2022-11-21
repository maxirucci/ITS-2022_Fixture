import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Domingo 27/11',
    lugar: [
        'Estadio Ahmad Bin Ali - 07:00 hs',
        'Estadio Al Bayt - 16:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Jueves 01/11',
    lugar: [
        'Estadio Internacional Khalifa - 16:00 hs',
        'Estadio Al Bayt - 16:00 hs.'
    ]
};

completarPartidos('e', fecha2, fecha3);