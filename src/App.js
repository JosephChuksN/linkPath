import { useState } from 'react';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import LinkPage from './Components/Dashboard/Pages/LinkPage';
import Appearance from './Components/Dashboard/Pages/Appearance';
import Settings from './Components/Dashboard/Pages/Settings';
import Preview from './Components/Preview';
import PrivateRoutes from './Routes/PrivateRoutes';
import { Routes, Route  } from 'react-router-dom';
import {  imgPic, } from './fakeData';
import { AuthProvider } from './Context/AppContext';


const App = () => {
  
 
 
  const [avater, setAvater] = useState(imgPic)
  

  return (
  <div className='bg-gray-100 h-full'>
      <AuthProvider>
    <Routes>
    
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='login' element={<Login />} />
      <Route element={<PrivateRoutes />}>
      <Route exact path='preview' element={<Preview  avater={avater} />} />
      <Route exact path='dashboard' element={
       
        <Dashboard 

          avater={avater} 
           />
          
       }>
        <Route  path='/dashboard/link' index
         element={<LinkPage  
         />} />
          <Route  path='/dashboard/appearance' 
         element={<Appearance  
          avater={avater} 
          setAvater={setAvater}
         
         />} />
         
         <Route  path='/dashboard/settings' 
          element={<Settings  
          avater={avater} 
          setAvater={setAvater}
          
         />} />
         
        
        </Route>


      </Route>
    
    
    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
