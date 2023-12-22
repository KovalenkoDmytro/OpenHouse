import {Route, Routes} from "react-router-dom";
import React from "react";
import Homes from "./pages/Homes";
import Communities from "./pages/Communities";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function RoutesList() {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Communities/>}/>
            <Route path="/communities" element={<Communities/>}/>
            <Route path="/communities/:id" element={<Homes/>}/>
            <Route path="/home/:id" element={<Home/>}/>
        </Routes>
    )
}