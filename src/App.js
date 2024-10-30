
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Admin from './components/Adminpage';
import Booking from './components/Bookingpage';
import Login from './components/Login';
import Profile from './components/Profilepage';
import Search from './components/Searchpage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Flights from './components/Flights';
import Bookingdetails from './Bookingdetails';
import Frontpage from './components/Frontpage';



function App() {
  return (
    <GoogleOAuthProvider clientId='840155392845-t5ucq8f3b4b5aosemqduqtr0fd0qajep.apps.googleusercontent.com'>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Frontpage/>}/>
    <Route path="/home" element={<Homepage />} />
    <Route path='/admin' element={<Admin />}/>
    <Route path="/booking/:flightName/:price" element={<Bookingdetails />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/search' element={<Search />}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/flightsdata' element={<Flights/>}/>
    </Routes>
   </Router>
   </GoogleOAuthProvider>
  );
}

export default App;
