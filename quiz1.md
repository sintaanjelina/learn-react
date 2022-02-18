1. Why do we need to `import React from "react"` in our files?
react is what defines JSX. in order to use JSX we need to import react not just ReactDOM

2. If I were to console.log(page) in index.js, what would show up?
Javascript object that contains React element in JSX structure that describe what React
should eventually add to real DOM.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
JSX need to be nested under a single parent element. As for solution to that are
putting empty tag above all tag in the page or put div tag. 
 
4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means that we only have to tell what to accomplish by program
then program will figure out how to do it like in react. 
Imperative means we have to describe step by step 
how to accomplish something just then program will be able to 
do it like in vanilla js. 

5. What does it mean for something to be "composable"?
we can take small pieces and put it together 
to make something greater/larger than the invidual pieces.
For example in React we could create several ui element and put it 
together into component in JSX to create larger pieaces of ui element.  