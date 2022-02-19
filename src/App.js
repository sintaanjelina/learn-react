import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style.css"

const App = () => {
    return (
        <div className="app--container">
            <Header />
            <Main />
            <Footer year="2022" author_last_name="Anjelina" />
        </div>
    )
}

export default App;