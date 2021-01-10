'use strict';

// Variables globales
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const divInputEmail = document.querySelector("#input__email");
const divInputName = document.querySelector("#input__name");


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
    nodeRowCities.classList.add('row', 'service__content', 'justify-content-center', 'mt-3', 'mt-lg-4');

    // llamar al endpoint de la tabla cities
    fetch('https://tour-app-34c02-default-rtdb.firebaseio.com/cities.json')
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {

                    const e = data[key];

                    // nodeDivCities 
                    const nodeDivCities = document.createElement('div');
                    nodeDivCities.classList.add('col-9', 'col-md-7', 'col-lg-3');

                    // IMG
                    const imgCities = document.createElement('img');
                    imgCities.setAttribute('src', e.img)

                    // Title cities
                    const titleCities = document.createElement('h6');
                    titleCities.textContent = e.nombre;

                    const divCities = document.createElement('span');
                    divCities.classList.add('row','justify-content-center')

                    // Seccion span de botones
                    const spanCities = document.createElement('span');
                    spanCities.classList.add('col-12');

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
                    nodeDivCities.appendChild(divCities);
                    divCities.appendChild(spanCities);
                    spanCities.appendChild(btnCotizar);
                    spanCities.appendChild(btnDetalles);

                    divService.appendChild(nodeRowCities);

                }
            }
        });
    
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

        localStorage.clear();


        if (i === 0) {
            divFromNode.style.display = 'flex';
        } else {
            divFromNode.style.display = 'none';
        }

    }

    // Limpiar clases de los input del form

    divInputEmail.classList.toggle('is-valid');
    divInputName.classList.toggle('is-valid');

}

function cotizar() {

    const divFrom = document.querySelector(".travel__form");

    divFrom.addEventListener('click', (e) => {


        if (e.target.classList[1]=== 'form__btn__next' || e.target.classList[1]=== 'form__btn__return') {

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
                        localStorage.setItem("nombre_pasajero", nameInput);
                        localStorage.setItem("email", email)

                        existeinput = true;
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

                    // Obtener el precio desde el endpoint
                    fetch(`https://tour-app-34c02-default-rtdb.firebaseio.com/cities/.json`)
                        .then(response => response.json())
                        .then(data => {

                            for (const key in data) {
                                if (Object.hasOwnProperty.call(data, key)) {

                                    const element = data[key];

                                    if (element.nombre === destino) {

                                        // Alamcenar en storage
                                        localStorage.setItem("precio_destino", element.precio);
                                        localStorage.setItem("destino", destino);
                                        
                                    }
                                    
                                }
                            }

                        })

                    existeinput = true;

                    break;

                case 'travelPassengers':
                    // Obtner numero de pasajeros
                    numPasajeros = formInput.form[2].value.trim();

                    if (numPasajeros !== '' && numPasajeros > 0) {

                        // Alamcenar en storage
                        localStorage.setItem("pasajeros", numPasajeros);

                        existeinput = true;
                    }

                    
                    break;

                case 'travelHotel':
                    // Obtener hotel

                    const divHotel = document.querySelectorAll(".travel__contenedor__hotel");
                    let id = 0;

                    divHotel.forEach(element => {

                        const divHotel = element.lastElementChild;


                        if (divHotel.classList[0]) {

                            if (divHotel.id === 'hotel_three') {
                                id = 2;
                            } else if (divHotel.id === 'hotel_four') {
                                id = 1;
                            }else{
                                id = 0;
                            }
                        }

                    });

                    // Obtener datos del endpoint

                    fetch(`https://tour-app-34c02-default-rtdb.firebaseio.com/hotels/${id}.json`)
                        .then(response => response.json())
                        .then(data => {

                            // Alamcenar en storage
                            localStorage.setItem("estrellas", data.n_estrellas);
                            localStorage.setItem("nombre_hotel", data.nombre);
                            localStorage.setItem("precio_hotel", data.precio);

                            showResults();

                        });

                    existeinput = true;

                    break;

                case 'travelResult':

                    if (e.target.textContent === 'Volver a cotizar') {
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

            } else if (e.target.id === 'hotel_five') {
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

function suscribeNewsLetter() {

    const email = document.forms["newsForm"]["email"].value;

    // Crear un usuario test
    const user = new User(1, "suscriber", email);
    console.log(user);

    alert(`Gracias ${email} por susciribrse !`)

}

function scrollAppear() {

    const introText = document.querySelector('.intro__text');
    const introForm = document.querySelector('.intro__form');
    const introFormContact = document.querySelector('.intro__contact');

    const introPositionText = introText.getBoundingClientRect().top;
    const introPositionForm = introForm.getBoundingClientRect().top;
    const introPositionFormContact = introFormContact.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 2;

    introText.classList.toggle('intro__appear', introPositionText < screenPosition);
    introForm.classList.toggle('intro__appear', introPositionForm < screenPosition);
    introFormContact.classList.toggle('intro__appear', introPositionFormContact < screenPosition);
}

function preSet() {

    // 

    let divDestino = document.querySelector('.travel__contenedor__cities');
    divDestino.childNodes[3].style.display = 'inline';
    divDestino.style.outline = '3px solid white'

    //

    const hotelFive = document.querySelector("#hotel_five");
    hotelFive.src = 'img/five.svg';

    //

    /* const divArrows = document.querySelector('.travel__arrows__content');
    divArrows.children[0].children[0].classList.toggle('active') */


     // Limpiar clases de los input del form
     divInputEmail.classList.toggle('is-valid');
     divInputName.classList.toggle('is-valid');

}

function showResults() {
    // Mostrar resultados

    const nombrePasjero = localStorage.getItem("nombre_pasajero");
    const destinoSeleccionado = localStorage.getItem("destino");
    const numeroPasajeros = localStorage.getItem("pasajeros");
    const precioHotel = localStorage.getItem("precio_hotel");
    const precioVuelo  = localStorage.getItem("precio_destino");

    const spanNombre = document.querySelector("#resultNombre")
    spanNombre.innerText = `Nombre: ${nombrePasjero}`;

    const spanDestino = document.querySelector("#resultDestino")
    spanDestino.innerText = `Destino: ${destinoSeleccionado}`;

    const spanPasajeros = document.querySelector("#resultPasajeros")
    spanPasajeros.innerText = `Cantidad de pasajeros: ${numeroPasajeros}`;

    const spanPrecioHotel = document.querySelector("#precioHotel")
    spanPrecioHotel.innerText = `Precio del hotel: ${precioHotel}`;

    const spanPrecioVuelo = document.querySelector("#precioVuelo")
    spanPrecioVuelo.innerText = `Precio del vuelo: ${precioVuelo}`;

    const spanTotal = document.querySelector("#resultTotal")

    const result = ( parseInt(precioVuelo) + parseInt(precioHotel)) * parseInt(numeroPasajeros);

    spanTotal.innerText = `Total: ${result}`; 

}

divInputName.addEventListener('input', (e) =>{

    const classInputName = divInputName.classList;

    !!e.target.value ? classInputName.contains('is-invalid') ? classInputName.replace('is-invalid', 'is-valid') : classInputName.add('is-valid') : classInputName.add('is-invalid'); 
})

divInputEmail.addEventListener('input', (e) =>{

    const classInputEmail = divInputEmail.classList;

    re.test(e.target.value) ? classInputEmail.contains('is-invalid') ? classInputEmail.replace('is-invalid', 'is-valid') : classInputEmail.add('is-valid') : classInputEmail.add('is-invalid'); 
})

window.addEventListener('scroll', scrollAppear);

window.addEventListener('scroll', () => {
    const diivNavBar = document.querySelector('.navBar'); 
    diivNavBar.classList.toggle("navScroll", window.scrollY > 0);
});

window.onload = () => {
    createSectionCities();
    clearFromViajar();
    cotizar();
    preSet();
    selectHotel();
};

