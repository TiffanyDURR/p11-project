import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Articledetails from "./pages/Articledetails";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home/Home";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <main>Chargement</main>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home locationArray={data} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
        <Route
          path="/article/:userId"
          element={<Articledetails locationArray={data} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
