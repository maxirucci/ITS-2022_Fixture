//import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
  titulo: 'Fecha 2',
  dia: 'Lunes 25/11',
  lugar: [
    'Estadio Al Thumama - 10:00 hs',
    'Estadio Al Bayt - 13:00 hs.'
  ]
};

const fecha3 = {
  titulo: 'Fecha 3',
  dia: 'Viernes 29/11',
  lugar: [
    'Estadio Ciudad Educación - 12:00 hs',
    'Estadio Al Janoub - 12:00 hs.'
  ]
};

console.log('a');
console.log(fecha2, fecha3);

completarPartidos('a', fecha2, fecha3);