import { Routes, Route } from 'react-router-dom';
import Login from './login';
import './css/App.css';
import Signup from './signup';
import Homepage from './homepage';

export default function App() {
  return (
    <>
      <div className='h-screen'>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          
          <Route path='/' element={<Homepage/>} />
          <Route path='/homepage' element={<Homepage/>} />
          
          <Route path='*' element={<h1> 404 Page not found </h1>} />
        </Routes>
      </div>
    </>
  );
}