import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Routes/PrivateRoute';
import { Routes, Route  } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';


const App = () => {
  return (
  <div className='bg-gray-100'>
      <AuthProvider>
    <Routes>
    
      <Route exact path='/' element={<HomePage />} />
      <Route eaxct path='/signup' element={<Signup />} />
      <Route eaxct path='/login' element={<Login />} />
      <Route eaxct path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

    
    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
