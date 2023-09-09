import React from "react";
import "./App.css";

import { Routes, Route } from "react-router";

import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Collection } from "./pages/Collection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
