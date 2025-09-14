
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




        <Route path="/school-program" element={<SchoolProgram />} />
        <Route path="/composite-lab" element={<CompositeLab />} />
        <Route path="/online-program" element={<Online />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />


      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
