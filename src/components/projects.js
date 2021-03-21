import React, {Component } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import i1 from './img/radio/1.png'
import i2 from './img/radio/2.png'
import i3 from './img/radio/3.png'
import i4 from './img/radio/4.png'
import i5 from './img/radio/5.png'
import i6 from './img/radio/6.png'
import i7 from './img/radio/7.png'
import i8 from './img/radio/8.png'
import i9 from './img/radio/9.png'
import i10 from './img/radio/10.png'
import i11 from './img/radio/11.png'
import i12 from './img/radio/12.png'
import i13 from './img/radio/13.png'
import i14 from './img/radio/14.png'
import i15 from './img/radio/15.png'

import i17 from './img/radio/17.png'
import i18 from './img/radio/18.png'
import i19 from './img/radio/19.png'
import i20 from './img/radio/20.png'
import i21 from './img/radio/21.png'
import i22 from './img/radio/22.png'
import i23 from './img/radio/23.png'
import i24 from './img/radio/24.png'
import i25 from './img/radio/25.png'
import i28 from './img/radio/28.png'
import i29 from './img/radio/29.png'
import i31 from './img/radio/31.png'
import i32 from './img/radio/32.png'
import i33 from './img/radio/33.png'
import i34 from './img/radio/34.png'
import i35 from './img/radio/35.png'
import i36 from './img/radio/36.png'
import i37 from './img/radio/37.png'
import i38 from './img/radio/38.png'
import i39 from './img/radio/39.png'
import i40 from './img/radio/40.png'
import i41 from './img/radio/41.png'
import i42 from './img/radio/42.png'
import i43 from './img/radio/43.png'
import i44 from './img/radio/44.png'
import i45 from './img/radio/45.png'

import m1 from './img/music/1.png'
import m2 from './img/music/2.png'
import m3 from './img/music/3.png'
import m4 from './img/music/4.png'
import m5 from './img/music/5.png'
import m6 from './img/music/6.png'


import f1 from './img/files/1.png'
import f2 from './img/files/2.png'
import f3 from './img/files/3.png'
import f4 from './img/files/4.png'
import f5 from './img/files/5.png'

import c1 from './img/chat/1.png'
import c2 from './img/chat/2.png'
import c3 from './img/chat/3.png'

export default class projects extends Component {
  render(){

         const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 3000,
          autoplaySpeed: 900,
          fade: true,
          autoplay: true,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };



    return(
      <div id="projects" className="projects position-absolute">

         <div className="row mx-auto" id="radio-img">

          <div id="text-tech-radio" className="col-md-6">
              <p className="">The Radio Cristal project is made up of two Frontend Applications and their corresponding API Rest.</p>
              <p className="m-0 p-0">One App for the use of the Companys officials and the other for the consumption and rendering on the screen of the clients.</p>
        <p className="p-0 m-0">In this case, it was proposed by the company that counted my services the possibility of making an application that loads texts, images, audios and videos on a Web, without the need for these data to be loaded by a developer but rather anyone with basic knowledge could perform this task.</p>
            <p className='m-0 p-0'>The project was carried out successfully!</p>
            <p className='m-0 p-0'>On the one hand, the Officials App has its user registry as it should, in which new officials can only be added by an administrator, then they can access their Login with these data.
We are talking about administrator login on the one hand and user login on the other, route protection, data encryption, NoSQL database, field validations, App with CRUD functions and some details such as observing users online in real time for example.</p>
            <p className='m-0 p-0'>The App rendered to the clients, has the possibility of reproducing the Companys Radio Station, receives the Audio Stream, renders the data provided by the officials.
It consumes and renders data on weather forecast, Covid-19 in an automatic way consuming several APIs and also has its advertising sector, customer service and contact forms with validation and personalized automatic response.</p>
            </div>



        <div className="col-md-6" id="slider-radio">
                <p className="text-danger">Pause this on hover</p>
                <Slider {...settings} >

                    <div id="img-tech-r">
                        <img src={i1}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i2}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i3}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i4}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i5}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i6}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i7}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i8}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i9}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i10}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i11}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i12}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i13}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i14}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i15}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i17}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i18}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i19}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i20}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i21}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i22}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i23}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i24}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i25}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i28}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i29}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i31}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i32}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i33}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i34}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i35}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i36}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i37}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i38}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i39}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i40}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i41}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i42}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i43}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={i44}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={i45}></img>
                    </div>


                </Slider>
            </div>

      </div>



        <div className="row mx-auto" id="music-img">

          <div id="text-tech-radio" className="col-md-6">
              <p className="">Music Start is an application in which the user can save their favorite videos and radios without the need to download them.</p>
              <p className="m-0 p-0">It's a convenient way to record and access your favorite music.
        An example of a nua App with CRUD functions made with NodeJS, JavaScript, Handlebars as a template engine and database MongoDB.</p>

        <p className="p-0 m-0">Route protection, password encryption, field validations, user authentication.
        You can try a trial version uploaded to Heroku!<a target='_blank' href="https://music-start.herokuapp.com">Open App</a></p>
        </div>

        <div className="col-md-6" id="slider-radio">
                <p className="text-danger">Pause this on hover</p>
                <Slider {...settings} >

                    <div id="img-tech-r">
                        <img src={m1}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={m2}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={m3}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={m4}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={m5}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={m6}></img>
                    </div>

                </Slider>
            </div>

      </div>


        <div className="row mx-auto" id="files-img">

          <div id="text-tech-radio" className="col-md-6">
              <p className="">All Files is a data logging app.</p>
              <p className="m-0 p-0">Complete the fields of the new file creation form, First name, middle name, identity document, photo, among others and this will create a new data file.</p>

        <p className="p-0 m-0">App with CRUD functions, made with PHP, Laravel with its Blade template engine and MySQL as a database.</p>

        <p className="p-0 m-0">Route protection, data encryption, login, paging, etc.
You can see its trial version on Heroku !.<a target='_blank' href="https://laravel-crud-mysql.herokuapp.com">Open App</a></p>
        </div>

        <div className="col-md-6" id="slider-radio">
                <p className="text-danger">Pause this on hover</p>
                <Slider {...settings} >

                    <div id="img-tech-r">
                        <img src={f1}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={f2}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={f3}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={f4}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={f5}></img>
                    </div>

                </Slider>
            </div>

      </div>




        <div className="row mx-auto" id="chat-img">

          <div id="text-tech-radio" className="col-md-6">
              <p className="">Live Chat is an example of how to chat in real time.</p>
              <p className="m-0 p-0">Being able to use in different applications which require the use of a chat in real time.</p>

        <p className="p-0 m-0">This App I have developed using PHP, Laravel, Livewire, Pusher, and Socket.io.</p>

        <p className="p-0 m-0">It does not require refreshing or reloading the browser, the data is displayed instantly using these tools.</p>

        <p className="m-0 p-0">Pusher encapsulating the implementation of websockets without having to run its own websockets server, Livewire creating a dynamic interface without neglecting Blade and Socket.io allowing two-way communication in real time between users.</p>

        </div>

        <div className="col-md-6" id="slider-radio">
                <p className="text-danger">Pause this on hover</p>
                <Slider {...settings} >

                    <div id="img-tech-r">
                        <img src={c1}></img>
                    </div>

                    <div id="img-tech-r">
                        <img src={c2}></img>
                    </div>

                     <div id="img-tech-r">
                        <img src={c3}></img>
                    </div>

                </Slider>
            </div>

      </div>





        <button id="btn-radio" className="btn-menu-projects btn-danger btn-sm">Radio Cristal</button>
        <button id="btn-music" className="btn-menu-projects btn-danger btn-sm">Music Start</button>
        <button id="btn-files" className="btn-menu-projects btn-danger btn-sm">App Files</button>
        <button id="btn-chat" className="btn-menu-projects btn-danger btn-sm">Live Chat</button>

        <button id="btn-back" className="btn-menu-projects btn-danger btn-sm">Go back</button>



      <div id="projects-text" className="col-5 text-center">
      <h5>I will tell you some experiences with projects!</h5>
      <h5>I have developed quite diverse applications.</h5>
      <h5>Among them API Rest, Apps with user authentication, route protection, data encryption such as passwords, Weather Forecast Apps with graphs and statistics, Apps on current Covid-19 data, Zoom Apps accessing the hardware of our devices, Chats in real time with technologies such as Livewire, Pusher and Socket.io, Apps CRUD (Create, Read, Update and Delete) either with Laravel or NodeJS among others!</h5>
      </div>

      <div>
      <button id="btn-show" className="btn-menu-projects btn-danger btn-sm">Show examples</button>
        <button id="btn-close" className="btn-menu-projects btn-danger btn-sm">Close</button>

      </div>

            <div className="arrow-down-projects text-center">
              <a className="text-decoration-none" href="#about"><i id="arrow_down_projects_i" className="fas fa-chevron-down"></i></a>
          </div>


      </div>
    )
  }
  componentDidMount(){
      $(document).ready(function(){
        $('#btn-close').hide();
        $('#btn-radio').hide();
        $('#btn-files').hide();
        $('#btn-music').hide();
        $('#btn-chat').hide();
        $('#radio-img').hide();
        $('#btn-back').hide();
        $('#music-img').hide();
        $('#files-img').hide();
        $('#chat-img').hide();


        $(document).on('click', '#btn-show', function(){
          $('#btn-show').hide('slow');
          $('#btn-close').show('slow');
          $('#btn-radio').show('slow');
          $('#btn-files').show('slow');
          $('#btn-music').show('slow');
          $('#btn-chat').show('slow');
        });
          $(document).on('click', '#btn-close', function(){
          $('#btn-close').hide('slow');
          $('#btn-radio').hide('slow');
          $('#btn-files').hide('slow');
          $('#btn-music').hide('slow');
          $('#btn-chat').hide('slow');
          $('#btn-show').show('slow');
        });
        $(document).on('click', '#btn-radio', function(){
          $('#projects-text').hide('slow');
          $('#btn-close').hide('slow');
          $('#btn-radio').hide('slow');
          $('#btn-files').hide('slow');
          $('#btn-music').hide('slow');
          $('#btn-chat').hide('slow');
          $('#btn-back').show('slow');
          $('#radio-img').show('slow');
        });
        $(document).on('click', '#btn-back', function(){
          $('#btn-back').hide('slow');
          $('#radio-img').hide('slow');
          $('#btn-close').show('slow');
          $('#btn-radio').show('slow');
          $('#btn-files').show('slow');
          $('#btn-music').show('slow');
          $('#btn-chat').show('slow');
          $('#projects-text').show('slow');
        });




          $(document).on('click', '#btn-music', function(){
          $('#projects-text').hide('slow');
          $('#btn-close').hide('slow');
          $('#btn-radio').hide('slow');
          $('#btn-files').hide('slow');
          $('#btn-music').hide('slow');
          $('#btn-chat').hide('slow');
          $('#btn-back').show('slow');
          $('#music-img').show('slow');
        });
        $(document).on('click', '#btn-back', function(){
          $('#btn-back').hide('slow');
          $('#music-img').hide('slow');
          $('#btn-close').show('slow');
          $('#btn-radio').show('slow');
          $('#btn-files').show('slow');
          $('#btn-music').show('slow');
          $('#btn-chat').show('slow');
          $('#projects-text').show('slow');
        });



       $(document).on('click', '#btn-files', function(){
          $('#projects-text').hide('slow');
          $('#btn-close').hide('slow');
          $('#btn-radio').hide('slow');
          $('#btn-files').hide('slow');
          $('#btn-music').hide('slow');
          $('#btn-chat').hide('slow');
          $('#btn-back').show('slow');
          $('#files-img').show('slow');
        });
        $(document).on('click', '#btn-back', function(){
          $('#btn-back').hide('slow');
          $('#files-img').hide('slow');
          $('#btn-close').show('slow');
          $('#btn-radio').show('slow');
          $('#btn-files').show('slow');
          $('#btn-music').show('slow');
          $('#btn-chat').show('slow');
          $('#projects-text').show('slow');
        });


        $(document).on('click', '#btn-chat', function(){
          $('#projects-text').hide('slow');
          $('#btn-close').hide('slow');
          $('#btn-radio').hide('slow');
          $('#btn-files').hide('slow');
          $('#btn-music').hide('slow');
          $('#btn-chat').hide('slow');
          $('#btn-back').show('slow');
          $('#chat-img').show('slow');
        });
        $(document).on('click', '#btn-back', function(){
          $('#btn-back').hide('slow');
          $('#chat-img').hide('slow');
          $('#btn-close').show('slow');
          $('#btn-radio').show('slow');
          $('#btn-files').show('slow');
          $('#btn-music').show('slow');
          $('#btn-chat').show('slow');
          $('#projects-text').show('slow');
        });




      });
  }
}
