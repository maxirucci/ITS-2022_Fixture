// import { getTodosLosEquipos, getEquiposGrupo } from '../bd.js'
import { completarPartidos } from '../shared/partidos.js'

const fecha2 = {
  titulo: 'Fecha 2',
  dia: 'Lunes 28/11',
  lugar: [
    'Estadio Al Janoub - 07:00 hs',
    'Estadio 974 - 13:00 hs.'
  ]
};

const fecha3 = {
  titulo: 'Fecha 3',
  dia: 'Viernes 28/11',
  lugar: [
    'Estadio Lusail - 16:00 hs',
    'Estadio 974 - 16:00 hs.'
  ]
};

completarPartidos('g', fecha2, fecha3);