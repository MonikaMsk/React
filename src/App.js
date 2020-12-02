import './App.css';
import Nav from './Nav'
import News from './News'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WeatherData from './WeatherData';

function App() {
  return (
    <Router>
    <div className="App">
       <Nav/>
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/weather' component={WeatherData}/>
       <Route path='/news' component={News} />
       </Switch>
    </div>
    </Router>
  );
}

const Home = () =>{
 return (
  <div>
 <h1>Home page</h1>
  </div>
 )
}

export default App;
