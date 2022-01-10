import './App.css';
import Organizations from './components/Pages/Organizations';
import { NavComponent } from './components/Navbar/NavComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <Router>
      <NavComponent/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/organizations" exact element={<Organizations/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
