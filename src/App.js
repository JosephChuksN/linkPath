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
import PrivateRoute from './Routes/PrivateRoute';
import { Routes, Route  } from 'react-router-dom';
import { siteData, imgPic, description } from './fakeData';
import { AuthProvider } from './Context/AuthContext';


const App = () => {
  
 
  const [siteInfo, setSiteInfo] =useState(siteData)
  const [avater, setAvater] = useState(imgPic)
  const [bio, setBio] = useState(description)

  return (
  <div className='bg-gray-100 h-full'>
      <AuthProvider>
    <Routes>
    
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='login' element={<Login />} />
      <Route element={<PrivateRoute />}>
      <Route exact path='preview' element={<Preview siteData={siteInfo} avater={avater} description={bio} />} />
      <Route exact path='dashboard' element={
       
        <Dashboard 

          avater={avater} 
          siteData={siteInfo}
          description={bio} />
          
       }>
        <Route  path='/dashboard/link' index
         element={<LinkPage 
         siteData={siteInfo} 
         setSiteData={setSiteInfo} 
         />} />
          <Route  path='/dashboard/appearance' 
         element={<Appearance  
          avater={avater} 
          setAvater={setAvater}
          description={bio}
          setDescription={setBio}
         />} />
         
         <Route  path='/dashboard/settings' 
         element={<Settings  
          
          
         />} />
         
        
        </Route>


      </Route>
    
    
    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
