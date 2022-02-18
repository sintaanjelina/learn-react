Quiz!

1. What is a React component?
Components are independent and reusable bits of code. 
In react They serve the same purpose as JavaScript functions, 
but work in isolation and return react element (JSX object / UI).

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
React component name must not be camel cases it shouold be capitalize or 
Pascal cases.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
Nothing is wrong with this code. 
However it is preferred to call header component with angle bracket insted of
parenthesses like html tag.
