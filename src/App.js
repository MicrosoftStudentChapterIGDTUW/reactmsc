import "./App.css";
import EventsPg from "./pages/Events/EventsPg";
import Header from "./pages/Header/Header";
import Footer from "./pages/Header/Footer";


import Contacts from "./pages/Contact/Contacts";
import MainSection from "./pages/Teams/MainSection";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FAQs from "./pages/Header/FAQs";
import Blog from "./pages/BlogPages/assets/Blog";
import Blogpg from "./pages/BlogPages/BlogPg";
import Bootcamp from "./pages/Bootcamp/Bootcamp";
import BlogKhushiSharma from "./pages/BlogPages/blogslist/BlogKhushiSharma";
import BlogAasthaSinghal from "./pages/BlogPages/blogslist/BlogAasthaSinghal";
import Upcoming from "./pages/Home/Upcoming";

import Triathlon from "./pages/Triathlon/MainPage";

import Bootcamp24 from "./pages/Bootcamp24/Bootcamp";
import AIML from "./pages/Bootcamp24/details/pages/AIML";
import AppD from "./pages/Bootcamp24/details/pages/AppD";
import ARVR from "./pages/Bootcamp24/details/pages/ARVR";
import Cyber from "./pages/Bootcamp24/details/pages/Cyber";
import DataAnal from "./pages/Bootcamp24/details/pages/DataAnal";
import ProdMgmt from "./pages/Bootcamp24/details/pages/ProdMgmt";
import Web3 from "./pages/Bootcamp24/details/pages/Web3";
import WebD from "./pages/Bootcamp24/details/pages/WebD";

import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init();   
  }, []);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/team" element={<MainSection />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/events" element={<EventsPg />} />
            <Route path="/blog" element={<Blogpg />} />
            <Route path="/googlegenerationscholarship" element={<Blog />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/bootcamp24" element={<Bootcamp24 />} />
            <Route path="/aiml" element={<AIML />} />
            <Route path="/appd" element={<AppD />} />
            <Route path="/arvr" element={<ARVR />} />
            <Route path="/cyber" element={<Cyber />} />
            <Route path="/dataanal" element={<DataAnal />} />
            <Route path="/prodmgmt" element={<ProdMgmt />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/webd" element={<WebD />} />
            <Route
              path="/mlsaapplicationprocess"
              element={<BlogKhushiSharma />}
            />
            <Route
              path="/smarthackathon(ferozpur)"
              element={<BlogAasthaSinghal />}
            />
            <Route path="/upevent" element={<Upcoming />} />
            <Route path="/triathlon" element={<Triathlon />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
