import React ,{Component} from 'react';
import $ from 'jquery';

export default class about extends Component {

  render(){
    return(
      <div className="about" id="about">

        <div id='blue'></div>
        <div id="red"></div>
        <div id="close"></div>

        <div id="text1" className="col-9 text-center">
          <p>As for my tastes</p>
          <p>I love web development or development in general.</p>
          <p>I really like having the ability to create and modify!</p>
          <p>I work very comfortable using Linux systems. I feel free to modify and personalize.</p>
          <p>I am very committed and integrated in my projects, both in Web design and in Backends development.</p>
       </div>
        <div id="text2" className="col-9 text-center">
          <p>Personally, I always try to go to the end in order to achieve my goals.</p>
          <p>I firmly hold my thoughts.</p>
          <p>"Always move forward"</p>
          <p>"Never give up"</p>
          <p>"Never abandon my goals"</p>
          <p>"Be persistent to make it possible"</p>
      </div>

        <div className="arrow-down-about text-center">
              <a className="text-decoration-none" href="#contact"><i id="arrow_down_about_i" className="fas fa-chevron-down"></i></a>
          </div>



      </div>

    )
  }
  componentDidMount(){

    $(document).ready(function(){
      $('#text1').hide();
      $('#text2').hide();

      $(document).on('click', '#blue', function(){
        $('#text1').hide('slow');
        $('#blue').hide('slow');
        $('#text2').show('slow');
        $('#red').show('slow');
      });
      $(document).on('click', '#red', function(){
        $('#text2').hide('slow');
        $('#red').hide('slow');
        $('#text1').show('slow');
        $('#blue').show('slow');
      });
      $(document).on('click', '#close', function(){
        $('#text2').hide('slow');
        $('#text1').hide('slow');
        $('#blue').show('slow');
        $('#red').show('slow');
      });

    })

  }
}
