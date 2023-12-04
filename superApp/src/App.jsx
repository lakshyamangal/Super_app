import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import RegisterPage from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/pages/RegisterPage.jsx";
import SelectCategory from "/Users/lakshya_mangal/Desktop/cuvette/super_app/Super_app/superApp/src/pages/SelectCategory.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/category" element={<SelectCategory />} />
      </Routes>
    </>
  );
}

export default App;
