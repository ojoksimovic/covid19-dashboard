import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faGlobeAmericas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";
import './App.css';
import ROUTE from './route';

function NavBar() {
  
    return (
<div id = "navbar" className = "row">
<div className = "nav-item col-3 text-center" id = "global-col"><Link to = {ROUTE.GLOBAL}><button>Global <FontAwesomeIcon icon={faGlobeAmericas}/></button></Link></div>
<div className = "nav-item col-3 text-center" id = "canada-col"><Link to = {ROUTE.CANADA}><button >Canada <FontAwesomeIcon icon={faCanadianMapleLeaf}/></button></Link></div>
<div className = "nav-item col-3 text-center" id = "compare-col"><Link to = {ROUTE.COMPARE}><button>Compare <FontAwesomeIcon icon={faChartLine}/></button></Link></div>
<div className = "nav-item col-3 text-center" id = "search-col"><Link to = {ROUTE.SEARCH}><button >Search <FontAwesomeIcon icon={faSearch}/></button></Link></div>
</div>);
}
export default NavBar;
