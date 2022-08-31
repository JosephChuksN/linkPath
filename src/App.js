import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import { Routes, Route  } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';


const App = () => {
  return (
  <div className=''>
      <AuthProvider>
    <Routes>
    
      <Route exact path='/' element={<HomePage />} />
      <Route eaxct path='/signup' element={<Signup />} />
      <Route eaxct path='/login' element={<Login />} />
      <Route eaxct path='/dashboard' element={<Dashboard />} />

    
    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
