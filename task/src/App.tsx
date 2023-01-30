import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import { BlockContainer } from "./containers/BlockContainer";
import { DogsContainer, HomeContainer } from "./containers";

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/block`}>Block</Link>
        </li>
        <li>
          <Link to={`/dogs`}>Dogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path={"/home"} element={<HomeContainer />} />
        <Route path={"/block"} element={<BlockContainer />} />
        <Route path={"/dogs"} element={<DogsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
