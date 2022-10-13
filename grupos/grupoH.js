// import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
  titulo: 'Fecha 2',
  dia: 'Lunes 28/11',
  lugar: [
    'Estadio Ciudad Educación - 10:00 hs',
    'Estadio Lusail - 16:00 hs.'
  ]
};

const fecha3 = {
  titulo: 'Fecha 3',
  dia: 'Viernes 28/11',
  lugar: [
    'Estadio Ciudad Educación - 12:00 hs',
    'Estadio Al Janoub - 12:00 hs.'
  ]
};

completarPartidos('h', fecha2, fecha3);