import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import GlobalGraphs from './GlobalGraphs';
import ContinentCards from './ContinentCards';

function App() {
  return (
    <div id = "site-wrapper">
    <div className="App container-fluid">
      <div id = "navbar" className = "row">
        <div className = "nav-item col-3 text-center" id = "global-col"><button to="/global" component={Link}>Global <FontAwesomeIcon icon={faGlobeAmericas}/></button></div>
        <div className = "nav-item col-3 text-center" id = "canada-col"><button to="/canada" component={Link}>Canada <FontAwesomeIcon icon={faCanadianMapleLeaf}/></button></div>
        <div className = "nav-item col-3 text-center" id = "compare-col"><button to="/compare" component={Link}>Compare <FontAwesomeIcon icon={faChartLine}/></button></div>
        <div className = "nav-item col-3 text-center" id = "search-col"><button to="/search" component={Link}>Search <FontAwesomeIcon icon={faSearch}/></button></div>
      </div>
      <h1 class="display-4" id = "title-text">Global Covid-19</h1>
      <hr/>
    </div>
    <Router>
    <Switch>
        <Route exact path="/" component={GlobalGraphs} />
          <Route path="/global" component={GlobalGraphs} />
          <Route path="/canada" component={ContinentCards} />
          <Route path="/compare" component={ContinentCards} />
          <Route path="/search" component={ContinentCards} />
        </Switch>
        </Router>

      </div>
    );

  }


export default App;
