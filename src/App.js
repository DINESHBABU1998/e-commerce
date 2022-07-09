import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Fashion from './components/Fashion';
import Laptops from './components/Laptops';
import Mobiles from './components/Mobiles';
import Accesories from './components/Accesories';
import { Provider } from './components/Createcontext';
import Profile from './components/Profile';
import Addcart from './components/Addcart';

function App() {
  return (
    <div className="App">

      <Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/laptops' element={<Laptops />} />
            <Route path='/mobiles' element={<Mobiles />} />
            <Route path='/accesories' element={<Accesories />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addcart' element={<Addcart />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
