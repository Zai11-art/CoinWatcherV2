import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsPage from "./Pages/NewsPage";
import AppPage from "./Pages/Appspage";
import ViewPage from "./Pages/ViewPage";
import PriceBar from "./components/PriceBar";
import LoginPage from "./Pages/LoginPage";
import CommunityPage from "./Pages/CommunityPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path={`/View/:id`} element={<ViewPage />}></Route>
        <Route path="/News" element={<NewsPage />}></Route>
        <Route path="/Apps" element={<AppPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/profile/:userId" element={<ProfilePage />}></Route>
      </Routes>
      <PriceBar></PriceBar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
