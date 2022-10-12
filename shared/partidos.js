import { getEquiposGrupo } from './bd.js'; 


export function completarPartidos(grupo, fecha2, fecha3) {
  console.log(grupo);
  console.log(fecha2, fecha3);

  const equiposGrupo = getEquiposGrupo(grupo);

  //* Fecha 2
  document.getElementById('titulo-2').textContent = fecha2.titulo;
  document.getElementById('fecha-2').textContent = fecha2.dia;

  document.getElementById('lugarHora1-2').textContent = fecha2.lugar[0];
  document.getElementById('lugarHora2-2').textContent = fecha2.lugar[1];

  document.getElementById('equipo3-2').textContent = equiposGrupo[3].equipo;
  document.getElementById('bandera3-2').src = `../recursos/banderas/${equiposGrupo[3].bandera}`;

  document.getElementById('equipo1-2').textContent = equiposGrupo[1].equipo;
  document.getElementById('bandera1-2').src = `../recursos/banderas/${equiposGrupo[1].bandera}`;

  document.getElementById('equipo0-2').textContent = equiposGrupo[0].equipo;
  document.getElementById('bandera0-2').src = `../recursos/banderas/${equiposGrupo[0].bandera}`;

  document.getElementById('equipo2-2').textContent = equiposGrupo[2].equipo;
  document.getElementById('bandera2-2').src = `../recursos/banderas/${equiposGrupo[2].bandera}`;


  //* Fecha 3
  document.getElementById('titulo-3').textContent = fecha3.titulo;
  document.getElementById('fecha-3').textContent = fecha3.dia;

  document.getElementById('lugarHora1-3').textContent = fecha3.lugar[0];
  document.getElementById('lugarHora2-3').textContent = fecha3.lugar[1];

  document.getElementById('equipo3-3').textContent = equiposGrupo[2].equipo;
  document.getElementById('bandera3-3').src = `../recursos/banderas/${equiposGrupo[2].bandera}`;

  document.getElementById('equipo1-3').textContent = equiposGrupo[1].equipo;
  document.getElementById('bandera1-3').src = `../recursos/banderas/${equiposGrupo[1].bandera}`;

  document.getElementById('equipo0-3').textContent = equiposGrupo[3].equipo;
  document.getElementById('bandera0-3').src = `../recursos/banderas/${equiposGrupo[3].bandera}`;

  document.getElementById('equipo2-3').textContent = equiposGrupo[0].equipo;
  document.getElementById('bandera2-3').src = `../recursos/banderas/${equiposGrupo[0].bandera}`;
}