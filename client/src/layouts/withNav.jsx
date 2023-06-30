import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceBar from "../components/PriceBar";
import AiWidget from "../components/aiWidget/AiWidget";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import NotificationPopUp from "../components/NotificationPopUp";
>>>>>>> origin/master


export default () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
=======
      <NotificationPopUp/>
>>>>>>> origin/master
      <AiWidget />
      <Outlet />
      <PriceBar />
      <Footer />
    </>
  );
};


