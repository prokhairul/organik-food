import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/NotFound';
import AboutUs from './components/aboutUs/AboutUs';
import Blog from './components/blog/Blog';
import BlogSingle from './components/blog/BlogSingle';
import Contact from './components/contact/Contact';
import Footer from './components/home/Footer';
import Nav from './components/home/Nav';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioSingle from './components/portfolio/PortfolioSingle';
import Service from './components/service/Service';
import ServiceSingle from './components/service/ServiceSingle';
import Shop from './components/shop/Shop';
import ShopSingle from './components/shop/ShopSingle';
import Team from './components/team/Team';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='shop-single' element={<ShopSingle />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/service-single' element={<ServiceSingle />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/portfolio-single' element={<PortfolioSingle />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog-single' element={<BlogSingle />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
