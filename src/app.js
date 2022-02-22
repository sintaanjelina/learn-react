import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function App() {
    return (
        <div className="app--container">
            <Navbar />
            <Hero />
        </div>
    )
}