import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import './App.css';
import DataFetch from './DataFetch';

function App() {
  const history = useHistory();

  return (
    <div id = "site-wrapper">
    <div className="App container-fluid">
    <DataFetch />
    </div>
      </div>
    );

  }


export default App;
