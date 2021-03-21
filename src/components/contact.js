import React ,{Component} from 'react';
import $ from 'jquery';


export default class contact extends Component {

    render(){
      return(
        <div className="contact" id="contact">

          <div>
                    <h4 id="contact">Contact me !</h4>
                </div>
                <div id="form" className="form-group col-5 mx-auto">


                    <form className="form form-group" action="https://formspree.io/f/mnqokrza" method="POST">
                        <input className="form form-control mt-3" type="text" name="name" placeholder="Enter your name" id="form" />
                        <div id="err"></div>
                        <input className="form form-control mt-3"  type="email" name="_replyto" placeholder="E-mail" id="email"/>
                        <textarea className='form form-control mt-3' type="text" name="message" rows='6' placeholder="Message" id="form"></textarea>
                        <input className="btn mt-3 " id="btn-form" type="submit" value="Send"/>
                    </form>
                </div>

                <div className="footer">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/guillermoferraz" target="_blank" title="Github"><i className="fab fa-github"></i></a>
            </li>
            <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/guillermo-ferraz-b24b231b4" target="_blank" title="Linkedin"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#welcome" title="Contact me!"><i class="fas fa-arrow-alt-circle-up"></i></a>
            </li>
          </ul>
      </div>


        </div>
      )
    }
  componentDidMount(){


  }
}
