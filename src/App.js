import React, { useEffect } from "react";
import "./App.scss";
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavigationBar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
