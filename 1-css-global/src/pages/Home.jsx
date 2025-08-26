import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
    return(
        <div className="home-conatiner">
            <NavBar/>
        </div>
    )
}

export default Home