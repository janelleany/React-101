let blog = {
    blogPosts: [
        title: 
        author:
        image: 
    ]
}





// react is a way to infrastructure up your content in a tree-like way...just like how the browser
// creates a virtual dom. "vdom". creates an object that has enough information which can create an actual dom element later. faster.
// dom - diff

// `Hello $(variableName)` = "Hello " + variableName

// "Component" = function that takes in data and spits out a vdom. Good components are (and functions) are pure. 
// reliably returns same thing if you invoke 

// conventional to capitalize component variable name. a component returns one vdom element. can have many children.

let ImplicitReturnArrowFunction = ({props}) => 
    console.log("I only have a single line of code and it's my single return so I don't need the return statement nor do I need curlies");

const h = document.querySelector("react-root");

let h1 = React.createElement("h1", { className: "header" }, "You're cute");
let p = React.createElement("p", null, "Aww, thanks");

let wrapper = React.createElement()

ReactDOM.render(ele, root);


let wrapper = h('div', null, [arrayOfChildrenOrListOutABunchOfVariables];

let anotherWayToDoWrapper = h('div', null, [
    ComponentFunction(argument),
    AnotherComponentFunction(argument)
])

let theBestWayToDoWrapper = h('div', null, [
    h(ComponentFunction, {props.name: "Janelle"}, []),
    h(AnotherComponentFunction)
])