import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import ListaContatos from "./pages/ListaContatos/ListaContatos";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListaContatos" element={<ListaContatos />} />
      </Routes>
    </Router>
  );
}
export default App;
