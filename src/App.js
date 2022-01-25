import './App.css';
import Organizations from './components/Pages/Organizations';
import OrganizationDetailed from "./components/Pages/OrganizationDetailed";
import { NavComponent } from './components/Navbar/NavComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AlertContext} from "./context/AlertContext";
function App() {

  return (
    <Router>
      <NavComponent/>
      <AlertContext>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/organizations" exact element={<Organizations/>}/>
            <Route path="/organization/:orgId" exact element={<OrganizationDetailed />}/>
          </Routes>
      </AlertContext>
    </Router>
   
  );
}

export default App;
