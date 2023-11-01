import React from "react";
import Home from "./home";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "./create";
import Update from "./update";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/edit/:serialNo" element={<Update/>}></Route>
          </Routes>
        </BrowserRouter>
    )
}

export default App