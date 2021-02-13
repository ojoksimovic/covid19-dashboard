import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DataFetch from './DataFetch';

function App() {
  return (
    <div id = "site-wrapper">
    <div className="App container-fluid">
      <div id = "navbar" className = "row">
        <div className = "nav-item col-3 text-center" id = "global-col"><a href = "/global"><button>Global <FontAwesomeIcon icon={faGlobeAmericas}/></button></a></div>
        <div className = "nav-item col-3 text-center" id = "canada-col"><a href = "/country/Canada"><button>Canada <FontAwesomeIcon icon={faCanadianMapleLeaf}/></button></a></div>
        <div className = "nav-item col-3 text-center" id = "compare-col"><a href = "/compare"><button>Compare <FontAwesomeIcon icon={faChartLine}/></button></a></div>
        <div className = "nav-item col-3 text-center" id = "search-col"><a href = "/search"><button>Search <FontAwesomeIcon icon={faSearch}/></button></a></div>
      </div>
    </div>
    <DataFetch />
      </div>
    );

  }


export default App;
