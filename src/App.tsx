import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Details, ProductForm } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<ProductForm />} />
      <Route path="/edit/:id" element={<ProductForm />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
