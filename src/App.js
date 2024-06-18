
import './App.css';
import EventsPg from "./pages/Events/EventsPg";
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';

import Contacts from "./pages/Contact/Contacts";
import MainSection from './pages/Teams/MainSection';
import Home from "./pages/Home/Home";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FAQs from './components/Header/FAQs';
import Blog from "./pages/BlogPages/assets/Blog";
import Blogpg from './pages/BlogPages/BlogPg';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import BlogKhushiSharma from './pages/BlogPages/blogslist/BlogKhushiSharma';
import BlogAasthaSinghal from './pages/BlogPages/blogslist/BlogAasthaSinghal';
import Upcoming from './pages/Home/Upcoming';

import Triathlon from './pages/Triathlon/MainPage';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

<Header/>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contacts/>}/>
  <Route path="/team" element={<MainSection/>}/>
  <Route path="/faq" element={<FAQs/>}/>
  <Route path="/events" element={<EventsPg/>}/>
  <Route path="/blog" element={<Blogpg/>}/>
  <Route path="/googlegenerationscholarship" element={<Blog/>}/>
  <Route path="/bootcamp" element={<Bootcamp/>}/>
  <Route path="/mlsaapplicationprocess" element={<BlogKhushiSharma/>}/>
  <Route path="/smarthackathon(ferozpur)" element={<BlogAasthaSinghal/>}/>
  <Route path="/upevent" element={<Upcoming/>}/>
  <Route path="/triathlon" element={<Triathlon/>}/>
</Routes>
</BrowserRouter>
<Footer/>

    </div>
  );
}

export default App;
