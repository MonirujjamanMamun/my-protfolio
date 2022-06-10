import logo from './logo.svg';
import './App.css';
import Navebar from './Pages/Shared/Navebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DataNotFound from './Pages/Shared/DataNotFound';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import SingelProductDetails from './Pages/Projects/SingelProductDetails';

function App() {
  return (
    <div>
      <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}>
          <Route path='projectdetails' element={<SingelProductDetails />} />
        </Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/datanotfound' element={<DataNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
