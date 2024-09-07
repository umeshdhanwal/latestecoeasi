import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomepageA";
import BlogPost from "./BlogPost";
import HomepageB from "./HomepageB";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/homepageb" element={<HomepageB />} />
      </Routes>
    </Router>
  );
};

export default Home;