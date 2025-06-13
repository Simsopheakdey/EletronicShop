import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;