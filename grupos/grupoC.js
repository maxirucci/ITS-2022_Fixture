import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
    titulo: 'Fecha 2',
    dia: 'Sabado 26/11',
    lugar: [
        'Estadio Ciudad Educación - 10:00 hs',
        'Estadio Lusail - 16:00 hs.'
    ]
};

const fecha3 = {
    titulo: 'Fecha 3',
    dia: 'Miercoles 30/11',
    lugar: [
        'Estadio 974 - 16:00 hs',
        'Estadio Lusail - 16:00 hs.'
    ]
};

completarPartidos('c', fecha2, fecha3);