import { Routes, Route } from 'react-router-dom';
import Authentication from './authorization';
import Login from './login';
import './css/App.css';
import Signup from './signup';

export default function App() {
  return (
    <>
      <div className='h-screen'>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          
          <Route path='/' element={<Signup/>} />
          
          <Route path='*' element={<h1> 404 Page not found </h1>} />
        </Routes>
      </div>
    </>
  );
}