import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Conferences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Conferences;
