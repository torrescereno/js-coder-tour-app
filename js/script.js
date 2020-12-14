'use strict';

/* Objetos */

function User(id, name, email) {

    this.id = id;
	this.name = name;
	this.email = email;

	/* this.getName = function () {
		return this.nombre;
	};

	this.setName = cambiarNombre; */
};

function Cities(id, name, price, desciption){

    this.id = id;
    this.name = name;
    this.price = price;
    this.desciption = desciption;
};

function Hotel(id, name, stars, desciption) {

    this.id = id;
    this.name = name;
    this.stars = stars;
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