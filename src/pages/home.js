import React from "react";

import About from "../components/About/About";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import ContactCard from "../components/ContactCard/ContactCard";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Cards />
      <ContactCard description="If you have any questions please feel free to drop me a line. I will get back to you as soon as I can. That's a promise." />
    </>
  );
}
