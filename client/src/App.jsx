import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import NewsPage from "./scenes/newsPage/NewsPage";
import AppPage from "./scenes/appsPage/Appspage";
import ViewPage from "./scenes/cryptocurrencyViewPage/cryptoViewPage";
import RegisterPage from "./scenes/loginPage/LoginPage";
import CommunityPage from "./scenes/communityPage/CommunityPage";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import LearnPage from "./scenes/learnPage/LearnPage";
import LearnPageSection from "./scenes/learnPage/LearnPageSection";
import CryptocurrencyPage from "./scenes/cryptocurrencyPage/CryptocurrencyPage";
import WithoutNav from "./layouts/withoutNav";
import WithNav from "./layouts/withNav";
import HomePage from "./scenes/homePage/HomePage";
import ProfileFollowers from "./scenes/profilePage/ProfileFollowers";
import ProfileFollowings from "./scenes/profilePage/ProfileFollowing";
import TestPage from "./scenes/TestPage";
<<<<<<< HEAD
=======
import ProfileWatchList from "./scenes/profilePage/ProfileWatchList";
import ExchangePage from "./scenes/exchangePage/ExchangePage";
import ExchangeViewPage from "./scenes/exchangeViewPage/ExchangeViewPage";

>>>>>>> origin/master

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<CryptocurrencyPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route
            path="/Cryptocurrencies"
            element={<CryptocurrencyPage />}
          ></Route>
          <Route path={`/View/:id`} element={<ViewPage />}></Route>
<<<<<<< HEAD
=======
          <Route path="/Exchanges" element={<ExchangePage />}></Route>
          <Route
            path={`/Exchanges/:exchangeId`}
            element={<ExchangeViewPage />}
          ></Route>
>>>>>>> origin/master
          <Route path="/News" element={<NewsPage />}></Route>
          <Route path="/Apps" element={<AppPage />}></Route>
          <Route path="/login" element={<RegisterPage />}></Route>
          <Route path="/Learn" element={<LearnPage />}></Route>
          <Route
            path="/Learn/:sectionId"
            element={<LearnPageSection />}
          ></Route>
          <Route
            path="/community"
<<<<<<< HEAD
            element={isAuth ? <CommunityPage /> : <CryptocurrencyPage />}
=======
            element={isAuth ? <CommunityPage /> : <RegisterPage />}
>>>>>>> origin/master
          ></Route>
          <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <CryptocurrencyPage />}
          ></Route>
          <Route
            path="/profile/:userId/followings"
            element={isAuth ? <ProfileFollowings /> : <CryptocurrencyPage />}
          ></Route>
          <Route
            path="/profile/:userId/followers"
            element={isAuth ? <ProfileFollowers /> : <CryptocurrencyPage />}
          ></Route>
<<<<<<< HEAD
=======
          <Route
            path="/profile/:userId/watchlist"
            element={isAuth ? <ProfileWatchList /> : <CryptocurrencyPage />}
          ></Route>
>>>>>>> origin/master
        </Route>
        <Route element={<WithoutNav />}>
          <Route path={`/Home`} element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
