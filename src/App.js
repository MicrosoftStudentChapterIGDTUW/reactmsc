
import './App.css';
import EventsPg from "./Events/EventsPg";
import Header from './Header/Header';
import Footer from './Header/Footer';
// import Modal from './Header/Modal';
import Contacts from "./Contact/Contacts";
import MainSection from './Teams/MainSection';
import Home from "./Home/Home";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FAQs from './Header/FAQs';
import Blog from "./BlogPages/assets/Blog";
import Blogpg from './BlogPages/BlogPg';
import Bootcamp from './Bootcamp/Bootcamp';
import Bootcamp24 from './Bootcamp24/Bootcamp';
import AIML from './Bootcamp24/details/pages/AIML';
import AppD from './Bootcamp24/details/pages/AppD';
import ARVR from './Bootcamp24/details/pages/ARVR';
import Cyber from './Bootcamp24/details/pages/Cyber';
import DataAnal from './Bootcamp24/details/pages/DataAnal';
import ProdMgmt from './Bootcamp24/details/pages/ProdMgmt';
import Web3 from './Bootcamp24/details/pages/Web3';
import WebD from './Bootcamp24/details/pages/WebD';
import BlogKhushiSharma from './BlogPages/blogslist/BlogKhushiSharma';
import BlogAasthaSinghal from './BlogPages/blogslist/BlogAasthaSinghal';
import Upcoming from './Home/Upcoming';
import ScrollToTop from './ScrollToTop';
// import AboutSec from './Home/AboutSec';
// import CardContainer from './Home/CardContainer';
import Triathlon from './Triathlon/MainPage';
// import Prizes from './prizes/Prizes';
// import Round from './Rounds/Round';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

<Header/>
<BrowserRouter>
  <ScrollToTop>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/team" element={<MainSection/>}/>
      <Route path="/faq" element={<FAQs/>}/>
      <Route path="/events" element={<EventsPg/>}/>
      <Route path="/blog" element={<Blogpg/>}/>
      <Route path="/googlegenerationscholarship" element={<Blog/>}/>
      <Route path="/bootcamp" element={<Bootcamp/>}/>
      <Route path="/bootcamp24" element={<Bootcamp24/>}/>
      <Route path="/aiml" element={<AIML/>}/>
      <Route path="/appd" element={<AppD/>}/>
      <Route path="/arvr" element={<ARVR/>}/>
      <Route path="/cyber" element={<Cyber/>}/>
      <Route path="/dataanal" element={<DataAnal/>}/>
      <Route path="/prodmgmt" element={<ProdMgmt/>}/>
      <Route path="/web3" element={<Web3/>}/>
      <Route path="/webd" element={<WebD/>}/>
      <Route path="/mlsaapplicationprocess" element={<BlogKhushiSharma/>}/>
      <Route path="/smarthackathon(ferozpur)" element={<BlogAasthaSinghal/>}/>
      <Route path="/upevent" element={<Upcoming/>}/>
      <Route path="/triathlon" element={<Triathlon/>}/>
    </Routes>
  </ScrollToTop>

</BrowserRouter>
<Footer/>

    </div>
  );
}

export default App;
