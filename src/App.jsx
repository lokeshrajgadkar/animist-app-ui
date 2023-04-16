import { useState } from "react";
import "./App.css";
import HomePage from "./components/screens/HomePage";
// import Homescreen from "./components/screens/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <HomePage />
    </div>
    // <>
    //   <BrowserRouter >
    //     <Routes>
    //       <Route exact path='/' element={<SearchAnime />} />
    //       <Route exact path='/info' element={<Info />} />
    //       <Route exact path='/watch' element={<WatchEpisode />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
