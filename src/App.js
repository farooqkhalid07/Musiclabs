import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Trade from './components/Trade/Trade';
import Library from './components/Library/Library';
import SingerDetails from './components/SingerDetails/SingerDetails';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trade" component={Trade} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/singer-details" component={SingerDetails} />
      </Switch>
      
    </Router>
    // <Router>
    //   <Home />
    // </Router>
    
  );
}

export default App;
