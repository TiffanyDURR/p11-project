import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Articledetails from "./pages/Articledetails";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    // setIsLoading(true);
    // axios
    //   .get("/data.json")
    //   .then((res) => {
    //     setData(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setErr("Ouppsss");
    //     setIsLoading(false);
    //   });

    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Chargement...</div>;

  if (err) return <div>{err}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home locationArray={data} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Errorpage />}></Route>

        <Route
          path="/article/:userId"
          element={
            <Articledetails locationArray={data} isLoading={isLoading} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
