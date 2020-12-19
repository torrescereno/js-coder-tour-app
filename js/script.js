'use strict';

/* Objetos */

/* Usario */

function User(id = 1, name, email) {

    this.id = id;
	this.name = name;
	this.email = email;

	/* this.getName = function () {
		return this.nombre;
	};

	this.setName = cambiarNombre; */
};

/* Ciudades */

function Cities(id, name, price, desciption){

    this.id = id;
    this.name = name;
    this.price = price;
    this.desciption = desciption;
};

/* Hoteles */

function Hotel(id, name, stars, price, desciption) {

    this.id = id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.desciption = desciption;
};



/* Suscribe Newsletter */

function suscribeNewsLetter() {

    const email = document.forms["newsForm"]["email"].value;

    // Crear un usuario test
    const user = new User(1, "suscriber", email);
    console.log(user);

    alert(`Gracias ${email} por susciribrse !`)
    
  }



// Objetos base con arreglos [pendiente convertir en json]


const cacun = new Cities(1, 'Cacun', 10000, 'Lorem ipsum dolor sit amet');
const newYork = new Cities(2, 'New York', 20000, 'Lorem ipsum dolor sit amet');
const miami = new Cities(3, 'Miami', 30000, 'Lorem ipsum dolor sit amet');
const paris = new Cities(4, 'Paris', 40000, 'Lorem ipsum dolor sit amet');
const roma = new Cities(5, 'Roma', 50000, 'Lorem ipsum dolor sit amet');

const arrCities = [
    cacun,
    newYork,
    miami,
    paris,
    roma
];

const hotelCacun01 = new Hotel(1, '1 - Hotel Cancún', 4, 10000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelCacun02 = new Hotel(2, '2 - Hotel Cancún', 5, 40000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelNewYork01 = new Hotel(3, '1 - Hotel New York', 3, 5000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelNewYork02 = new Hotel(4, '2 - Hotel New York', 5, 40000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelMiami01 = new Hotel(5, '1 - Hotel Miami', 3, 5000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelMiami02 = new Hotel(6, '2 - Hotel Miami', 5, 40000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelParis01 = new Hotel(7, '1 - Hotel Paris', 4, 10000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelParis02 = new Hotel(8, '2 - Hotel Paris', 5, 40000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelRoma01 = new Hotel(9, '1 - Hotel Roma', 5, 40000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');
const hotelRoma02 = new Hotel(10, '2 - Hotel Roma', 2, 2500, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum?');


const arrHoteles = [
    [0, hotelCacun01],
    [0, hotelCacun02],
    [1, hotelNewYork01],
    [1, hotelNewYork02],
    [2, hotelMiami01],
    [2, hotelMiami02],
    [3, hotelParis01],
    [3, hotelParis02],
    [4, hotelRoma01],
    [4, hotelRoma02]
];



// --------------------------------------------------  funcion temp //

function cotizar() {
    
    /* DATOS */
    const nombre = prompt('Por favor ingrese su nombre');
    const email = prompt('Por favor ingrese un email');

    const user = new User(1, nombre, email);

    /* DESTINO */
    const destino = Number(prompt(`
        Por favor ingrese un destino

        1- Cacun
        2- New York
        3- Miami
        4- Paris
        5- Roma
    `));

    /* CUANTOS VAN */

    const cantPasajeros = Number(prompt(`Por favor ingrese la cantidad de pasajeros`));
    
    /* HOTEL */

    let msj = '';
    let hoteles = [];

    arrHoteles.forEach( element => {

        if ( element[0] === destino - 1 ) {
            msj += ` ${element[1].name} - Precio: ${element[1].price} \n`;
            hoteles.push(element[1]);
        }
        
    });

    const hotel = prompt(`Seleccione un hotel: \n${msj}`);

    
    /* COTIZACION */

    const total = (arrCities[destino-1].price + hoteles[hotel - 1].price) * cantPasajeros;

    alert(`
        Resultado de la cotizacion: 
        Nombre: ${nombre}
        Destino seleccionado: ${arrCities[destino-1].name}
        Precio del vuelo: ${total}
    `);


}

// --------------------------------------------------  funcion temp //