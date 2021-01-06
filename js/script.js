'use strict';

// Variables globales
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

/* CLASES */

/* Usario */

class User {

    constructor(id = 1, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    };

    /* this.getName = function () {
        return this.nombre;
    };

    this.setName = cambiarNombre; */
};

/* Ciudades */

class Cities {

    constructor(id, name, price, desciption, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desciption = desciption;
        this.img = img;
    };

};

/* Hoteles */

class Hotel {

    constructor(id, name, stars, price, desciption) {
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.price = price;
        this.desciption = desciption;
    }
}

// --------------------------------------------------

// Objetos base con arreglos [pendiente convertir en json]


const cacun = new Cities(1, 'Cacun', 10000, 'Lorem ipsum dolor sit amet', 'img/beach.svg');
const newYork = new Cities(2, 'New York', 20000, 'Lorem ipsum dolor sit amet', 'img/new-york.svg');
const miami = new Cities(3, 'Miami', 30000, 'Lorem ipsum dolor sit amet', 'img/beach.svg');
const paris = new Cities(4, 'Paris', 40000, 'Lorem ipsum dolor sit amet', 'img/paris.svg');
const roma = new Cities(5, 'Roma', 50000, 'Lorem ipsum dolor sit amet', 'img/coliseum.svg');

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

// --------------------------------------------------


/* Suscribe Newsletter */

function suscribeNewsLetter() {

    const email = document.forms["newsForm"]["email"].value;

    // Crear un usuario test
    const user = new User(1, "suscriber", email);
    console.log(user);

    alert(`Gracias ${email} por susciribrse !`)

}


/**
 * Funcion de ejercicio para la creacion dinamica de elemntos y anidacion de nodos
 * Crea dinamicamente la seccion de ciudades disponibles, segun el arreglo de ciudades
 * @param 
 */

function createSectionCities() {

    // Div principal
    const divService = document.querySelector('#service');


    // Nodo del titulo
    const nodeTitle = document.createElement('div');
    nodeTitle.classList.add("row", "justify-content-center");

    const nodeH2 = document.createElement('h2');
    nodeH2.textContent = 'Destinos disponibles';

    nodeTitle.appendChild(nodeH2)

    // Insertar nodo de titulo
    divService.appendChild(nodeTitle)

    // Crar row de seccion de ciudades
    const nodeRowCities = document.createElement('div');
    nodeRowCities.classList.add('row', 'service__content', 'justify-content-center', 'mt-2', 'mt-lg-4');

    for (let x = 0; x < arrCities.length; x++) {
        // nodeDivCities 
        const nodeDivCities = document.createElement('div');
        nodeDivCities.classList.add('col-9', 'col-md-7', 'col-lg-3');

        // IMG
        const imgCities = document.createElement('img');
        imgCities.setAttribute('src', arrCities[x].img)

        // Title cities
        const titleCities = document.createElement('h6');
        titleCities.textContent = arrCities[x].name;

        // Seccion span de botones
        const spanCities = document.createElement('span');
        spanCities.classList.add('d-xl-inline-flex', 'justify-content-between', 'w-50');

        // creacion de botones
        const btnCotizar = document.createElement('button');
        btnCotizar.classList.add('btn');
        btnCotizar.setAttribute('onclick', "location.href='#travel'")
        btnCotizar.textContent = 'Cotizar';


        const btnDetalles = document.createElement('button');
        btnDetalles.classList.add('btn');
        btnDetalles.setAttribute('data-toggle', 'modal');
        btnDetalles.setAttribute('data-target', '#serviceModal');
        btnDetalles.textContent = 'Deatalles';


        // Union de nodos
        nodeRowCities.appendChild(nodeDivCities);

        nodeDivCities.appendChild(imgCities);
        nodeDivCities.appendChild(titleCities);
        nodeDivCities.appendChild(spanCities);
        spanCities.appendChild(btnCotizar);
        spanCities.appendChild(btnDetalles);

        divService.appendChild(nodeRowCities);
    }

}

function selectCitie(element) {


    let imgStyle = element.childNodes[3].style
    let divStyle = element.style;
    let divElement = document.querySelectorAll('.travel__contenedor__cities');
    const numNodes = document.querySelectorAll('.travel__contenedor__cities').length;


    for (let i = 0; i < numNodes; i++) {
        divElement[i].childNodes[3].style.display = 'none'
        divElement[i].style.outline = '1px solid white'
    }

    imgStyle.display = 'inline'
    divStyle.outline = '3px solid white'


}

function clearFromViajar() {

    const divForm = Array.from(document.querySelector(".travel__form").children);
    let divId;
    let divFromNode;


    // Recorrer nodos hijos
    for (let i = 0; i < divForm.length; i++) {

        divId = divForm[i].attributes.id.value;

        divFromNode = document.querySelector(`#${divId}`)


        if (i === 0) {
            divFromNode.style.display = 'flex';
        } else {
            divFromNode.style.display = 'none';
        }

    }

}

function cotizar() {


    const divFrom = document.querySelector(".travel__form");


    divFrom.addEventListener('click', (e) => {

        //console.log(e);

        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {

            const divActual = e.target.parentElement.parentElement;
            const formInput = divActual.querySelector("input");
            let divSiguiente = divActual.nextElementSibling;
            let existeinput = false;

            let divDestino;
            let destino;
            let numPasajeros;


            

            // Validar cantenido de los input

            switch (divActual.attributes.id.value) {

                case 'tavelDatos':

                    const nameInput = formInput.form[0].value.trim();
                    const email = formInput.form[1].value.trim();
                    
                    
                    // Validar email y que el nombre tenag contenido

                    if (nameInput !== '' && re.test(email)) {

                        // Almacenar en storage
                        localStorage.setItem("nombre", nameInput);
                        localStorage.setItem("email", email)

                        existeinput = true;
                    }else{
                        alert('Debe ingresar el nombre y el email')
                    }

                    break;
                case 'tavelCities':
                    // Obtener citie
                    divDestino = document.querySelectorAll(".travel__contenedor__cities");
                    
                    divDestino.forEach(element => {

                        if (element.lastElementChild.style.display === 'inline') {
                            destino = element.innerText;
                        }
                        
                    });

                    // Alamcenar en storage
                    localStorage.setItem("destino", destino);

                    existeinput = true;
                    break;

                case 'travelPassengers':
                    // Obtner numero de pasajeros
                    numPasajeros = formInput.form[2].value.trim();

                    // Alamcenar en storage
                    localStorage.setItem("pasajeros", numPasajeros);

                    existeinput = true;
                    break;

                case 'travelHotel':
                    // Obtener hotel

                    const divHotel = document.querySelectorAll(".travel__contenedor__hotel");
                    let stars = 5;

                    divHotel.forEach(element => {

                        const divHotel = element.lastElementChild;


                        if(divHotel.classList[0]){

                            if (divHotel.id === 'hotel_three') {
                                stars = 3;
                            }else if (divHotel.id === 'hotel_four') {
                                stars = 4;
                            } else {
                                stars = 5;
                            }
                        }
                    });

                    // Alamcenar en storage
                    localStorage.setItem("estrellas", stars);


                    existeinput = true;

                    // Mostrar resultados

                    const spanNombre = document.querySelector("#resultNombre")
                    spanNombre.innerText = `Nombre: ${localStorage.getItem("nombre")}`;

                    const spanDestino= document.querySelector("#resultDestino")
                    spanDestino.innerText = `Destino: ${localStorage.getItem("destino")}`;

                    const spanPasajeros = document.querySelector("#resultPasajeros")
                    spanPasajeros.innerText = `Cantidad de pasajeros: ${localStorage.getItem("pasajeros")}`;

                    const spanTotal = document.querySelector("#resultTotal")
                    spanTotal.innerText = `Total: `;

                    break;

                case 'travelResult':

                    if(e.target.textContent === 'Volver a cotizar'){
                        clearFromViajar();
                    }

                    break;
            }

            if (existeinput) {
                divActual.style.display = 'none';
                divSiguiente.style.display = 'flex'
            }


        }

    });


}

function selectHotel() {

    const divFormHotel = document.querySelectorAll(".travel__contenedor__hotel");

    const hotelThree = document.querySelector("#hotel_three");
    const hotelFour = document.querySelector("#hotel_four");
    const hotelFive = document.querySelector("#hotel_five");

    divFormHotel.forEach(element => {

        element.addEventListener('click', (e) => {
            
            if (e.target.id === 'hotel_three') {
    
                hotelThree.src = 'img/three.svg';
                hotelThree.classList = 'select';
                
                //
                hotelFour.src = 'img/four_black.svg';
                hotelFive.src = 'img/five_black.svg';
    
                hotelFour.classList = '';
                hotelFive.classList = '';
                
    
    
            } else if (e.target.id === 'hotel_four') {
                hotelFour.src = 'img/four.svg';
                hotelFour.classList = 'select';
    
                //
                hotelThree.src = 'img/three_black.svg';
                hotelFive.src = 'img/five_black.svg';
    
                hotelThree.classList = '';
                hotelFive.classList = '';
         
            } else if(e.target.id === 'hotel_five') {
                hotelFive.src = 'img/five.svg';
                hotelFive.classList = 'select';
    
                // 
                hotelThree.src = 'img/three_black.svg';
                hotelFour.src = 'img/four_black.svg';
    
                hotelThree.classList = '';
                hotelFour.classList = '';
              
            }
    
        })
        
    });

}

// Animaciones

function scrollAppear() {

    const introText = document.querySelector('.intro__text');
    const introForm = document.querySelector('.intro__form');
    const introFormContact = document.querySelector('.intro__contact');

    const introPositionText = introText.getBoundingClientRect().top;
    const introPositionForm = introForm.getBoundingClientRect().top;
    const introPositionFormContact = introFormContact.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 2;

    if (introPositionText < screenPosition) {
        introText.classList.add('intro__appear');
    }

    if (introPositionForm < screenPosition) {
        introForm.classList.add('intro__appear');
    }

    if (introPositionFormContact < screenPosition) {
        introFormContact.classList.add('intro__appear');
    }

}

function preSet() {

    // 
    
    let divDestino = document.querySelector('.travel__contenedor__cities');
    divDestino.childNodes[3].style.display = 'inline';
    divDestino.style.outline = '3px solid white'

    //

    const hotelFive = document.querySelector("#hotel_five");
    hotelFive.src = 'img/five.svg';
}



// Ejecicon de funciones

window.addEventListener('scroll', scrollAppear);

window.onload = () => {
    createSectionCities();
    clearFromViajar();
    cotizar();
    preSet();
    selectHotel();
    
    
};

