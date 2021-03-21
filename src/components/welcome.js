import React, {Component} from 'react';
import $ from 'jquery';
import Typed from 'typed.js';


export default class welcome extends Component {

  render(){

    return(


      <div id="welcome" className="welcome">

          <div className="head">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/guillermoferraz" target="_blank" title="Github"><i className="fab fa-github"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/guillermo-ferraz-b24b231b4" title="Linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" title="Contact me!"><i className="fas fa-envelope"></i></a>
            </li>
          </ul>
      </div>


        <div className="m-5">
          <button id="btn-show-menu" className="btn-menu btn btn-warning btn-sm">Show menu</button>
          <button id="btn-hide-menu" className="btn-menu btn btn-warning btn-sm">Hide menu</button>
        </div>

        <div className="row">

        <div id='menu' className="col-md-2 m-3">
          <div className="row m-0 p-0">
            <div id="card-menu" className="card mx-auto m-0 p-0">
              <div className="d-grid gap-2 text-center p-3">
                <a className="btn-menu btn btn-warning btn-sm" href="#knowledge">My Knowledge</a>
                <a className="btn-menu btn btn-warning btn-sm" href="#projects">Some projects</a>
                <a className="btn-menu btn btn-warning btn-sm" href="#about">About me</a>
                <a className="btn-menu btn btn-warning btn-sm" href="#contact">Contact me</a>
              </div>
            </div>
          </div>
        </div>

      <div className="col-11 mx-auto text-center my-auto">

          <div className="container col-10 text-center " id="writer">
            <div className="contenedor-texto mx-auto">
					    <h2 className="titulo mx-auto">  <span className="typed_init"> </span> </h2>
            </div>
          </div>

          <div className="container col-10 text-center " id="writer-menu">
            <div className="contenedor-texto-2 mx-auto">
					    <h2 className="titulo mx-auto">  <span className="typed_menu"> </span> </h2>
            </div>
          </div>


      </div>

      </div>
          <div className="arrow-down text-center">
              <a className="text-decoration-none" href="#knowledge"><i id="arrow_down_i" className="fas fa-chevron-down"></i></a>
          </div>

      </div>
    )
  }
  componentDidMount(){

        $(document).ready(function(){
          $('#btn-hide-menu').hide();
          $('#menu').hide();
          $('#writer-menu').hide();

          $(document).on('click','#btn-show-menu', function(){
            $('#btn-show-menu').hide('slow');
            $('#writer').hide('slow');
            $('#btn-hide-menu').show('slow');
            $('#menu').show('slow');
            $('#writer-menu').show('slow');

          });
          $(document).on('click','#btn-hide-menu', function(){
            $('#btn-hide-menu').hide('slow');
            $('#writer-menu').hide('slow');
            $('#menu').hide('slow');
            $('#btn-show-menu').show('slow');
            $('#writer').show('slow');

          })

        });


    /* Typed  init*/


       const typed_init = new Typed('.typed_init', {
	        strings: [
		        '<i class="write"></i>',
		        '<i class="write"> Welcome !</i>',
                '<i class="write">I am Guillermo Ferraz </i>',
                '<i class="write">Web developer</i>',
                '<i class="write">Backend and Frontend</i>',
                '<i class="write">I invite you to meet me !</i>'
	        ],

	        //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	        shuffle: false, // Alterar el orden en el que escribe las palabras.
	        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	        loop: true, // Repetir el array de strings
	        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	        showCursor: true, // Mostrar cursor palpitanto
	        cursorChar: '|', // Caracter para el cursor
	        contentType: 'html', // 'html' o 'null' para texto sin formato
        });


    /* Typed  open menu*/


       const typed_menu = new Typed('.typed_menu', {
	        strings: [
		        '<i class="write"></i>',
		        '<i class="write"> Great !</i>',
                '<i class="write">You opened the menu </i>',
                '<i class="write">Explore my website !</i>',
                '<i class="write">We go !!!</i>'
	        ],

	        //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	        shuffle: false, // Alterar el orden en el que escribe las palabras.
	        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	        loop: true, // Repetir el array de strings
	        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	        showCursor: true, // Mostrar cursor palpitanto
	        cursorChar: '|', // Caracter para el cursor
	        contentType: 'html', // 'html' o 'null' para texto sin formato
        });




  }
}
