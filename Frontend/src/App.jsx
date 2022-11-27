// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard_popup';
import LoginSetUpPage from './pages/LoginSetUpPage';
import PhoneNumber from './pages/PhoneNumberSignUp';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import Bpexisting from './pages/Bpexisting';
import BpfirstTime from './pages/BpfirstTime';
import HeartRateExisting from './pages/HeartRateExisting';
import BodyTemperatureExisting from './pages/BodyTemperatureExisting';
import BloodGlucoseExisting from './pages/BloodGlucoseExisting';
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
         <Route path='/' element={<LoginSetUpPage/>} />   
         <Route path='/loginForm' element={<LoginForm/>} /> 
         <Route path='/signUpForm' element={<SignUpForm/>} /> 
         <Route path='/dashboard' element={<Dashboard />} /> 
         <Route path='/phonenumber' element={<PhoneNumber />} /> 
         <Route path='/bpexisting' element={<Bpexisting/>}/>
         <Route path='/heartrateexisting' element={<HeartRateExisting/>}/>
         <Route path='/bodytemperatureexisting' element={<BodyTemperatureExisting/>}/>
         <Route path='/bloodglucoseexisting' element={<BloodGlucoseExisting/>}/>
         <Route path='/bpfirsttime' element={<BpfirstTime/>}/> 
 
            {/* <Route path='/home' element ={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
