import React, { useEffect } from "react";
import "../../styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <>
    <div>
      <Header />
      <Footer /> 
    </div>     
    </>
  )
};

export default Gallery;
