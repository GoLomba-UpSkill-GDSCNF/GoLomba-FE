import {Routes, Route } from 'react-router-dom';

import Navbarcomponent from './components/Navbarcomponent';
import Footercomponent from './components/Footercomponent ';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Login from './components/Login';


function App() {
 
  return (
  <div>
    <Navbarcomponent/>

    <Routes>
      <Route path="/halamanutama" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    <Footercomponent/>
  </div>

  );
}


export default App;
