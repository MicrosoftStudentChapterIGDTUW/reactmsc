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
import Bootcamp from "./pages/Bootcamp23/Bootcamp";
import BlogKhushiSharma from "./pages/BlogPages/blogslist/BlogKhushiSharma";
import BlogAasthaSinghal from "./pages/BlogPages/blogslist/BlogAasthaSinghal";
import Upcoming from "./pages/Home/Upcoming";

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

import HackItUp from "./pages/Hack-It-Up/Hackathon";

import RegistrationForm from "./pages/Hack-It-Up/RegistrationForm";
// import SubmissionForm from "./pages/Hack-It-Up/SubmissionForm";
import SubmissionRedirect from "./pages/Hack-It-Up/SubmissionRedirect";
import PrizeRankings from "./pages/Hack-It-Up/Prizes";


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
            <Route path="/bootcamp24" element={<Bootcamp24/>}/>
            <Route path="/bootcamp24/aiml" element={<AIML/>}/>
            <Route path="/bootcamp24/appd" element={<AppD/>}/>
            <Route path="/bootcamp24/arvr" element={<ARVR/>}/>
            <Route path="/bootcamp24/cyber" element={<Cyber/>}/>
            <Route path="/bootcamp24/dataanal" element={<DataAnal/>}/>
            <Route path="/bootcamp24/prodmgmt" element={<ProdMgmt/>}/>
            <Route path="/bootcamp24/web3" element={<Web3/>}/>
            <Route path="/bootcamp24/webd" element={<WebD/>}/>
            <Route
              path="/mlsaapplicationprocess"
              element={<BlogKhushiSharma />}
            />
            <Route
              path="/smarthackathon(ferozpur)"
              element={<BlogAasthaSinghal />}
            />
            <Route path="/upevent" element={<Upcoming />} />
            <Route path="/hackitup" element={<HackItUp />} />
            <Route path="/hackitup/registration" element={<RegistrationForm />} />
            {/* <Route path="/hackitup/submission" element={<SubmissionForm />} /> */}
            <Route path="/hackitup/submission" element={<SubmissionRedirect />} />
            <Route path="/hackitup/prizes" element={<PrizeRankings />}/>


          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
