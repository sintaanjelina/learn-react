import React from "react"
import photo_grid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero--image" src={photo_grid} />
            <h2 className="hero--title">Online Experiences</h2>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}