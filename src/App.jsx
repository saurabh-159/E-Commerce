import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className='h-screen w-screen flex'>
      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[5%]">
          Home
        </Link>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;