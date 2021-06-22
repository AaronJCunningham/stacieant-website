import React, { useEffect } from "react";
import { Container } from "@chakra-ui/react";

import "../sass/style.scss";

// import Header from "../components/Header";

import Portfolio from "../components/Portfolio";
import Bio from "../components/Bio";
import News from "../components/News";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Cv from "../components/Cv";
import Video from "../components/Video";
import HeaderStacie from "../components/HeaderStacie";

const HomePage = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-180px";
    }
  }

  return (
    <>
      {/* <Header /> */}
      <HeaderStacie />
      <Menu />
      <Container maxW="70rem" mb="150">
        <Bio />
        <Portfolio />
        <Video />
        <Cv />
        <News />
        <Contact />
      </Container>
    </>
  );
};

export default HomePage;
