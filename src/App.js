import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import welcome from './components/welcome';
import projects from './components/projects';
import about from './components/about';
import knowledge from './components/knowledge';
import contact from './components/contact';

function App() {
  return (

    <Router>
      <Route exact path="/" component={welcome}/>
      <Route exact path="/" component={knowledge}/>
      <Route exact path="/" component={projects}/>
      <Route exact path="/" component={about}/>
      <Route exact path="/" component={contact}/>

    </Router>

  );
}

export default App;
