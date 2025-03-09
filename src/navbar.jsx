import React from 'react';
import { job_sphere } from './assets';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 flex gap-20 justify-center shadow-md">
      <img src={job_sphere} alt="logo" className='w-20 h-15 rounded-md'/>
      <ul className="list-none p-0 flex gap-4">
        <li><a href="/homepage" className="nav-link">Job Search</a></li>
        <li><a href="#" className="nav-link">My Application</a></li>
        <li><a href="#" className="nav-link">Companies</a></li>
        <li><a href="#" className="nav-link">Contact Us</a></li>
      </ul>
      <section className='flex gap-10'>
        <button className="blue-solid-button">Login</button>
        <button className="blue-shallow-button">Sign in</button>
      </section>
    </nav>
  );
}
