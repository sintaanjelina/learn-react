const Page = (props) => {
  return (
    <div>
      <header>
        <nav>
          <img src="./assets/img/react-logo.svg" width="40" />
        </nav>
      </header>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
      <h1> Reasons why i learn react </h1>
      <ol>
        <li> Build my portofolio </li>
        <li> To be qualified on job i wanted to apply</li>
        <li> To learn and understand Javascript more</li>
        <li> To understand at least one of Javascript Frontend Framework</li>
      </ol>
      <footer>
        <small>@{props.year} {props.author_last_name} development. All rights reserved.</small>
      </footer>
    </div>
  )
}
ReactDOM.render(<Page year="2022" author_last_name="Anjelina" />, document.getElementById('root'))  