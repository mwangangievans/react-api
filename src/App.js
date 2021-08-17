import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Create from './components/create';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <Router>
  <div className="main">
    <h2 className="main-header"> React Crud Operations</h2>
    <div>
    <Route exact path="/create" component={Create}/>
    </div>
    <div style={{ marginTop: 20 }}>
      <Route  exact path ="/read" component={Read} />
    </div>
    <div style={{ marginTop: 20 }}>
      <Route  exact path ="/update" component={Update} />
    </div>
   </div>
    </Router>
 
  );
}

export default App;
