import './App.css';
import Organizations from './components/Pages/Organizations';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/organizations" exact element={<Organizations/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
