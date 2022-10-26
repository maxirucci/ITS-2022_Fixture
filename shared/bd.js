export function getTodosLosEquipos() {
    return mockEquipos;
}

export function getEquiposGrupo(grupo) {
    const equipos = mockEquipos.slice();

    return equipos.filter(item => item.grupo === grupo);
}

const mockEquipos = [
    { grupo: 'a', equipo: 'Senegal', bandera: 'senegal.png' },
    { grupo: 'a', equipo: 'Países Bajos', bandera: 'paisesBajos.png' },
    { grupo: 'a', equipo: 'Qatar', bandera: 'qatar.png' },
    { grupo: 'a', equipo: 'Ecuador', bandera: 'ecuador.png' },

    { grupo: 'b', equipo: 'Inglaterra', bandera: 'inglaterra.png' },
    { grupo: 'b', equipo: 'Iran', bandera: 'iran.png' },
    { grupo: 'b', equipo: 'Estados Unidos', bandera: 'estadosUnidos.png' },
    { grupo: 'b', equipo: 'Gales', bandera: 'gales.png' },

    { grupo: 'c', equipo: 'Argentina', bandera: 'argentina.png' },
    { grupo: 'c', equipo: 'Arabia Saudita', bandera: 'arabiaSaudita.png' },
    { grupo: 'c', equipo: 'Mexico', bandera: 'mexico.png' },
    { grupo: 'c', equipo: 'Polonia', bandera: 'polonia.png' },

    { grupo: 'd', equipo: 'Dinamarca', bandera: 'dinamarca.png' },
    { grupo: 'd', equipo: 'Túnez', bandera: 'tunez.png' },
    { grupo: 'd', equipo: 'Francia', bandera: 'francia.png' },
    { grupo: 'd', equipo: 'Australia', bandera: 'australia.png' },

    { grupo: 'e', equipo: 'Alemania', bandera: 'alemania.png' },
    { grupo: 'e', equipo: 'Japón', bandera: 'japon.png' },
    { grupo: 'e', equipo: 'España', bandera: 'espania.png' },
    { grupo: 'e', equipo: 'Costa Rica', bandera: 'costaRica.png' },

    { grupo: 'f', equipo: 'Marruecos', bandera: 'marruecos.png' },
    { grupo: 'f', equipo: 'Croacia', bandera: 'croacia.png' },
    { grupo: 'f', equipo: 'Bélgica', bandera: 'belgica.png' },
    { grupo: 'f', equipo: 'Canadá', bandera: 'canada.png' },

    { grupo: 'g', equipo: 'Suiza', bandera: 'suiza.png' },
    { grupo: 'g', equipo: 'Camerún', bandera: 'camerun.png' },
    { grupo: 'g', equipo: 'Brasil', bandera: 'brasil.png' },
    { grupo: 'g', equipo: 'Serbia', bandera: 'serbia.png' },

    { grupo: 'h', equipo: 'Uruguay', bandera: 'uruguay.png' },
    { grupo: 'h', equipo: 'Corea Del Sur', bandera: 'coreaDelSur.png' },
    { grupo: 'h', equipo: 'Portugal', bandera: 'portugal.png' },
    { grupo: 'h', equipo: 'Ghana', bandera: 'ghana.png' },
]


//Creamos un array con usuarios random
const usuarios = [{
        id: 1,
        name: "juan",
        password: "123",
    },
    {
        id: 2,
        name: "pedro",
        password: "1234",
    },
    {
        id: 3,
        name: "pablo",
        password: "12345",
    },
    {
        id: 4,
        name: "esteban",
        password: "12",
    },
];