import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/CryptocurrencyPage";
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
import AiPage from "./Pages/AiPage";
import AiWidget from "./components/aiWidget/AiWidget";
import TestingPage from "./Pages/TestingPage";
import CryptocurrencyPage from "./Pages/CryptocurrencyPage";
import HomePage from "./Pages/HomePage";

function App() {
  // const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/Cryptocurrencies" element={<CryptocurrencyPage />}></Route>
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
        <Route path="/aiBot" element={<AiPage />}></Route>
        <Route path="/test" element={<TestingPage />}></Route>
      </Routes>
      <AiWidget />
      <PriceBar></PriceBar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

//  <Route path="/documentation/:docsId" component={DocumentationSection} />
