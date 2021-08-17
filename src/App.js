import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Create from './components/create';

function App() {
  return (
    <Router>
  <div className="main">
    <h2 className="main-header"> React Crud Operations</h2>
    <div>
    <Create />
    </div>
   </div>
    </Router>
 
  );
}

export default App;
