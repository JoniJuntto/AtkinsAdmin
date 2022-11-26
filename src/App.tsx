import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NewUsers from "./views/NewUsers";
import EditUsers from "./views/EditUsers";
import Newsletters from "./views/Newsletters";
import Home from "./views/Home";
import NewNewsletter from "./views/NewNewsletter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editusers" element={<EditUsers />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/newusers" element={<NewUsers />} />
          <Route path="/newletter" element={<NewNewsletter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;