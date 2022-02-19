import React from "react"

const Main = () => {
    return (
        <main>
            <div>
                <h1 className="main--title">Fun facts about React</h1>
                <ul className="main--facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousand of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <div>
                <h1 className="main--title"> Reasons why i learn react </h1>
                <ol className="main--facts">
                    <li> Build my portofolio </li>
                    <li> To be qualified on job i wanted to apply</li>
                    <li> To learn and understand Javascript more</li>
                    <li> To understand at least one of Javascript Frontend Framework</li>
                </ol>
            </div>
        </main>
    )
}

export default Main;