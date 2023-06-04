import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Home from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsPage from "./Pages/NewsPage";
import AppPage from "./Pages/Appspage";
import ViewPage from "./Pages/ViewPage";
import PriceBar from "./components/PriceBar";
import RegisterPage from "./Pages/LoginPage";
import CommunityPage from "./Pages/CommunityPage";
import ProfilePage from "./Pages/ProfilePage";
import LearnPage from "./Pages/LearnPage";
import LearnPageSection from "./Pages/LearnPageSection";
import ArtPage from "./Pages/ArtPage";

function App() {
  // const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter >

      {showNav && (
        <>
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/art" element={<ArtPage funcNav={setShowNav}/>}></Route>
        <Route path={`/View/:id`} element={<ViewPage />}></Route>
        <Route path="/News" element={<NewsPage />}></Route>
        <Route path="/Apps" element={<AppPage />}></Route>
        <Route path="/login" element={<RegisterPage />}></Route>
        <Route path="/Learn" element={<LearnPage />}></Route>
        <Route path="/Learn/:sectionId" element={<LearnPageSection />}></Route>
        <Route
          path="/community"
          element={isAuth ? <CommunityPage /> : <Home />}
        ></Route>
        <Route
          path="/profile/:userId"
          element={isAuth ? <ProfilePage /> : <Home />}
        ></Route>
      </Routes>

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

//  <Route path="/documentation/:docsId" component={DocumentationSection} />
