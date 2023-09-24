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
import PrivateRoute from './auth/PrivateRoute';
import Logout from './auth/logout';


function App() {
  return (
   
    <div className='App'>
    
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/addper" element={<PrivateRoute element={<AddPer />} />} />
          <Route exact path="/editper/:id" element={<PrivateRoute element={<EditPer />} />} />
          <Route exact path="/viewper/:id" element={<PrivateRoute element={<ProfilPer />} />} />
          <Route exact path="/addconge" element={<PrivateRoute element={<AddConge />} />} />
          <Route exact path="/listerConge" element={<PrivateRoute element={<ListerConge />} />} />
          <Route exact path="/listerAbsence" element={<PrivateRoute element={<ListerAbsence />} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />}
          />
        </Routes>
      </Router>
  
  </div>
    
  );
}

export default App;


