import React, {Component } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import node from './img/node.jpeg';
import react from './img/react.png';
import javascript from './img/javascript.jpg';
import laravel from './img/laravel.png';
import php from './img/php.png';
import electron from './img/electron.png';
import ionic from './img/ionic.png';
import git from './img/git.jpg';
import docker from './img/docker.png';
import handlebars from './img/handlebars.jpg';
import express from './img/express.png';
import html from './img/html.jpg';
import css from './img/css.jpg';
import bootstrap from './img/bootstrap.jpeg';

import mysql from './img/mysql.png';
import mongo from './img/mongo.png';
import mariadb from './img/mariadb.jpg';
import postgresql from './img/postgresql.png';

import archlinux from './img/arch.jpg';
import debian from './img/debian.png';
import fedora from './img/fedora.jpg';
import ubuntu from './img/ubuntu.png';
import centos from './img/centos.png';
import ssh from './img/ssh.jpg';

export default class knowledge extends Component {
  render(){

        const settings = {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 3000,
          autoplaySpeed: 900,
          fade: true,
          autoplay: true,
          pauseOnHover: false,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return(
      <div id="knowledge" className="knowledge">
          <div className="">
            <button id="btn-skills" className="btn-menu-skills btn btn-warning btn-sm mt-3">Tech Skills</button>
            <button id="btn-databases" className="btn-menu-skills btn btn-warning btn-sm mt-3">Databases</button>
            <button id="btn-others" className="btn-menu-skills btn btn-warning btn-sm mt-3">Other Skills</button>
          </div>


        <div className="row mx-auto" id="tech-skills">

            <div className="col-md-5 mx-auto">
                <Slider {...settings} >

                    <div id="img-tech">
                        <img src={react}></img>
                    </div>

                    <div id="img-tech">
                        <img src={node}></img>
                    </div>

                     <div id="img-tech">
                        <img src={javascript}></img>
                    </div>

                    <div id="img-tech">
                        <img src={laravel}></img>
                    </div>

                    <div id="img-tech">
                        <img src={php}></img>
                    </div>

                    <div id="img-tech">
                        <img src={electron}></img>
                    </div>

                     <div id="img-tech">
                        <img src={ionic}></img>
                    </div>

                    <div id="img-tech">
                        <img src={git}></img>
                    </div>

                    <div id="img-tech">
                        <img src={docker}></img>
                    </div>

                    <div id="img-tech">
                        <img src={handlebars}></img>
                    </div>

                     <div id="img-tech">
                        <img src={express}></img>
                    </div>

                    <div id="img-tech">
                        <img src={html}></img>
                    </div>

                    <div id="img-tech">
                        <img src={css}></img>
                    </div>

                    <div id="img-tech">
                        <img src={bootstrap}></img>
                    </div>

                </Slider>
            </div>
            <div id="text-tech" className="col-md-6 mx-auto">
              <p className="">To carry out my projects I use different libraries, frameworks, languages and databases.</p>
              <p className="m-0 p-0">This depending on the requirements of said project.</p>
              <p className="p-0 m-0">Whether for the development of API Rest, for the evaluation of what type of database will be more efficient for the project, be it SQL or NoSQL and the desired results in the Frontend for the best UI / UX of our project.</p>
              <p className="m-0 p-0">Besides Frameworks or libraries for the Frontend I also use template engines like EJS, Handlebars or Blade in the case of PHP.</p>
              <p className="p-0 m-0">Version control with Git and the creation of our project in containers with Docker is necessary both for proper control, evolution and also to avoid possible compatibility conflicts, highlighting Docker and the various excellent benefits that we obtain when using it in our projects.</p>
        </div>

        </div>



        <div className="row mx-auto" id="databases">

          <div id="text-tech" className="col-md-6 mx-auto">
              <p className="">Depending on the magnitude of the project and in what way I need to relate the data for it is my choice for the database.</p>
              <p className="m-0 p-0">If I require a large-scale project at the data storage level, NoSQL will optimize the performance in our queries, therefore it would be a good option.</p>
              <p className="p-0 m-0">Also the relationship of data is carried out in a not very complex way. In short, the choice of the database is SQL or NoSQL is relative depending on the requirements of the project that we have ahead.</p>
            </div>



        <div className="col-md-5 mx-auto">
                <Slider {...settings} >

                    <div id="img-tech">
                        <img src={mysql}></img>
                    </div>

                    <div id="img-tech">
                        <img src={mongo}></img>
                    </div>

                     <div id="img-tech">
                        <img src={mariadb}></img>
                    </div>

                    <div id="img-tech">
                        <img src={postgresql}></img>
                    </div>

                </Slider>
            </div>

      </div>

        <div className="row mx-auto" id="others-skills">

            <div className="col-md-5 mx-auto">
                <Slider {...settings} >

                    <div id="img-tech">
                        <img src={archlinux}></img>
                    </div>

                    <div id="img-tech">
                        <img src={debian}></img>
                    </div>

                     <div id="img-tech">
                        <img src={fedora}></img>
                    </div>

                    <div id="img-tech">
                        <img src={ubuntu}></img>
                    </div>

                    <div id="img-tech">
                        <img src={centos}></img>
                    </div>

                    <div id="img-tech">
                        <img src={ssh}></img>
                    </div>


                </Slider>
            </div>
            <div id="text-tech" className="col-md-6 mx-auto">
              <p className="">I have extensive knowledge of Linux-based systems, which really makes it very comfortable for me to work on Linux terminals, be it Archlinux, Debian, Fedora, CentOS, Ubuntu or practically any Linux distribution.</p>
              <p className="m-0 p-0">Secure Shell (SSH) facilitates secure communications between systems, its use is not complex, therefore I use this protocol in my connections both to work, administer databases or systems remotely.</p>
            </div>

        </div>

           <div className="arrow-down-tech text-center">
              <a className="text-decoration-none" href="#projects"><i id="arrow_down_tech_i" className="fas fa-chevron-down"></i></a>
          </div>

      </div>
    )
  }

  componentDidMount(){

      $(document).ready(function(){
        $('#databases').hide();
        $('#others-skills').hide();

        $(document).on('click','#btn-databases', function(){
          $('#tech-skills').hide('slow');
          $('#others-skills').hide();
          $('#databases').show('slow');
        });
        $(document).on('click', '#btn-skills',function(){
          $('#databases').hide('slow');
          $('#others-skills').hide();
          $('#tech-skills').show('slow');
        });
          $(document).on('click', '#btn-others',function(){
          $('#databases').hide('slow');
          $('#tech-skills').hide();
          $('#others-skills').show('slow');
        })
      })
  }

}
