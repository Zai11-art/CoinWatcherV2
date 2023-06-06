import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PriceBar from "./components/PriceBar";
import AiWidget from "./components/aiWidget/AiWidget";

import NewsPage from "./scenes/newsPage/NewsPage";
import AppPage from "./scenes/appsPage/Appspage";
import ViewPage from "./scenes/cryptocurrencyViewPage/cryptoViewPage";
import RegisterPage from "./scenes/loginPage/LoginPage";
import CommunityPage from "./scenes/communityPage/CommunityPage";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import LearnPage from "./scenes/LearnPage/LearnPage";
import LearnPageSection from "./scenes/learnPage/LearnPageSection";
import CryptocurrencyPage from "./scenes/cryptocurrencyPage/CryptocurrencyPage";
import HomePage from "./scenes/homePage/HomePage";

function App() {
  // const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && (
        <>
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<CryptocurrencyPage funcNav={setShowNav} />}></Route>
        <Route index path="/Home" element={<HomePage funcNav={setShowNav} />}></Route>
        <Route
          path="/Cryptocurrencies"
          element={<CryptocurrencyPage funcNav={setShowNav} />}
        ></Route>
        <Route path={`/View/:id`} element={<ViewPage funcNav={setShowNav}/>}></Route>
        <Route path="/News" element={<NewsPage funcNav={setShowNav}/>}></Route>
        <Route path="/Apps" element={<AppPage funcNav={setShowNav}/>}></Route>
        <Route path="/login" element={<RegisterPage funcNav={setShowNav}/>}></Route>
        <Route path="/Learn" element={<LearnPage funcNav={setShowNav}/>}></Route>
        <Route path="/Learn/:sectionId" element={<LearnPageSection funcNav={setShowNav}/>}></Route>
        <Route
          path="/community"
          element={isAuth ? <CommunityPage funcNav={setShowNav}/> : <CryptocurrencyPage funcNav={setShowNav}/>}
        ></Route>
        <Route
          path="/profile/:userId"
          element={isAuth ? <ProfilePage funcNav={setShowNav}/> : <CryptocurrencyPage funcNav={setShowNav}/>}
        ></Route>
      </Routes>
      <AiWidget />

      {showNav && (
        <>
          <PriceBar></PriceBar>
          <Footer></Footer>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;