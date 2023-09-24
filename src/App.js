import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,Routes, Route, Switch } from 'react-router-dom';
import ListPersonnel from './componenets/ListPersonnel';
import HeaderComponents from './componenets/HeaderComponents';
import FooterComponents from './componenets/FooterComponents';
import CreatPersonnelComponents from './componenets/CreatPersonnelComponents';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import AddPer from './CRUD/AddPer';
import EditPer from './CRUD/EditPer';
import ViewPer from './CRUD/ViewPer';
import AddConge from './CRUD/AddConge';
import ProfilPer from './CRUD/ProfilPer';
import ListerConge from './pages/ListerConge';
import ListerAbsence from './pages/ListerAbsence';
import Login from './auth/login';
import Register from './auth/register';
import AuthGuard from './auth/AuthGuard';


function App() {
  return (
   
    <div className='App'>
    
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/addper" element={<AddPer/>} />
          <Route exact path="/editper/:id" element={<EditPer />} />
          <Route exact path="/viewper/:id" element={<ProfilPer/>} />
          <Route exact path="/addconge" element={<AddConge/>} />
          <Route exact path="/listerConge" element={<ListerConge/>} />
          <Route exact path="/listerAbsence" element={<ListerAbsence/>} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protect the /home route with AuthGuard */}
          <Route path="/home" element={<AuthGuard element={<Home />} />}
          />
        </Routes>
      </Router>
  
  </div>
    
  );
}

export default App;


