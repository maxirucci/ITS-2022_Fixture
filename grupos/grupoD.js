import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Sabado 26/11',
    lugar: [
        'Estadio Al Janoub - 07:00 hs',
        'Estadio 974 - 13:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Miercoles 30/11',
    lugar: [
        'Estadio Al Janoub - 12:00 hs',
        'Estadio Ciudad Educación - 12:00 hs.'
    ]
};

completarPartidos('d', fecha2, fecha3);