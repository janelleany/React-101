const root = document.querySelector(".react-root");
const h = React.createElement

const user = {
    name: "Janelle",
    surname: "Alexander"
}

let blogPosts = [
    {
        id: '1',
        title: "Wakanda Forever",
        body: "Great movie. Can't wait for the sequel!"
    },
    {
        id: '2',
        title: "Infinity Wars is gonna be dope!",
        body: "Because of the massive franchise crossover, it's going to be best Marvel film ever. Fight me in the replies."
    },
    {
        id: '3',
        title: "My next tattoo...",
        body: "...is going to be a dragon. And it's gonna be dope."
    }
]

let blogPostsObject = {
    list: blogPosts
}

let Greeting = function(object) {
    let x = object.name;
    let y = object.surname;
    return h("h1", null, "Hello, " + x + " " + y);
}


let LogoBox = function() {
    return h("h1", null, "Janelle's Awesome Blog");
}

let Header = function() {
    return h("div", null, [
        h(Greeting, user, []),
        h(LogoBox, null, [])
    ]);    
}

let Post = function(object) {
    return h("div", null, [
        h("h4", null, object.title),
        h("p", null, object.body)
    ]);
}

let BlogList = function(object) {
    let array = object.list;
    let newArray = [];
    array.forEach(element => {
        let newElement = h(Post, element, []);
        newArray.push(newElement);
    });
    return newArray;
}

let Footer = function() {
    return h("p", null, "Copyright 2018");
}

let Page = function() {
    return h("main", null, [
        h(Header, user, []),
        h(BlogList, blogPostsObject, []),
        h(Footer, null, [])
    ]);
}

ReactDOM.render(h(Page, null, []), root);

// simple React exercise
// let Greeting = function(name) {
//     return h("h1", null, "What up, homey?");
// }

// let Message = function() {
//     return h("p", null, "React is interesting.")
// }

// let Footer = function() {
//     return h("p", null, "Copyright 2020");
// }

// let Template = function() {
//     return h("div", null, [
//         h(Greeting, null, []),
//         h(Message, null, []),
//         h(Footer, null, [])
//     ]);
// }

// 

// .filter array such that it returns an array with all items from the first one that are not the id of the one we want to delete