import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Routes, Route  } from 'react-router-dom';


const App = () => {
  return (
  <div className=''>
    <Routes>
    <Route exact path='/' element={<HomePage />} />
    <Route eaxct path='/signup' element={<Signup />} />
    <Route eaxct path='/login' element={<Login />} />
    </Routes>
  </div>
  );
}

export default App;
