
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonal from "./pages/Testimonal";
import Contact from "./pages/Contact";
import BookDemo from "./pages/BookDemo";
import LabInAction from "./pages/LabInAction";
import ResourceEvent from "./pages/ResourceEvent";
import SchoolProgram from "./pages/SchoolProgram";
import CompositeLab from "./pages/CompositeLab";
import Courses from "./pages/Courses";
import ScrollToTop from "./Layout/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Quizz from "./pages/Quizz";
import Online from "./pages/Online-program";
import CourseDetail from "./components/OnlineProgram/CourseDetail";
import Registration from "./pages/Registration";
import CompanyPolicy from "./pages/CompanyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Competition from "./pages/CompetitionCard";
import Explore from "./pages/Explore";
const App = () => {
  return (
    <Router>
<ScrollToTop/>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success-story" element={<Testimonal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/lab-in-action" element={<LabInAction />} />
        <Route path="/event" element={<ResourceEvent />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/test-series" element={<Quizz/>} />


        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/registration" element={<Registration/>}/>




        <Route path="/school-program" element={<SchoolProgram />} />
        <Route path="/composite-lab" element={<CompositeLab />} />
        <Route path="/online-program" element={<Online />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />

        <Route path="/company-policy" element={<CompanyPolicy/>}/>
        <Route path="shipping_policy" element={<ShippingPolicy/>}/>
        <Route path="/return_policy" element={<ReturnPolicy />} />
        <Route path="/refund_policy" element={< RefundPolicy/>}/>
        <Route path="/T&C" element={<TermsAndConditions />} />
        <Route path="/competitions" element={<Competition />} />

        <Route path="/explore" element={<Explore/>}/>




      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
