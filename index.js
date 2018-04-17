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
    listOfBlogPosts: blogPosts
}

let isAPostBeingEdited = false;

let editedPostId = "";

let Greeting = function(user) {
    let x = user.name;
    let y = user.surname;
    return h("p", {className: "Greeting-container"}, "Hello, " + x + " " + y);
}


let LogoBox = function() {
    return h("h1", {className: "LogoBox-container"}, "Janelle's Awesome Blog");
}

let Header = function() {
    return h("div", {className: "Header-container"}, [
        h(Greeting, user, []),
        h(LogoBox, null, [])
    ]);    
}

// refactor with .filter?
let deleteButtonEventHandler = function(postToDelete) {
    blogPosts.forEach(function(element, index) {
        if (postToDelete.id === element.id) {blogPosts.splice(index, 1)}
    });
    update();
}

let editButtonEventHandler = function(postBeingEdited) {
    isAPostBeingEdited = true;
    editedPostId = postBeingEdited.id;
    update();
}

let editTitleHandler = function(postBeingEdited, newTitle) {
    blogPosts.forEach(function(element) {
        if (postBeingEdited.id === element.id) {
            element.title = newTitle;
        }
    });
    update();
}


let editBodyHandler = function(postBeingEdited, newBody) {
    blogPosts.forEach(function(element) {
        if (postBeingEdited.id === element.id) {
            element.body = newBody;
        }
    });
    update();
}

let submitButtonEventHandler = function() {
    isAPostBeingEdited = false;
    editedPostId = "";
    update();
}

let Post = function(aPost) {
    if (isAPostBeingEdited && aPost.id === editedPostId) {
        return h("div", {className: "Post-container"}, [
            h("h3", null, aPost.title),
            h("p", null, aPost.body),
            h("input", {onChange: (event) => editTitleHandler(aPost, event.target.value)}),
            h("input", {onChange: (event) => editBodyHandler(aPost, event.target.value)}),
            h("button", {onClick: () => submitButtonEventHandler(aPost)}, "Save Changes")
            ]);
    } else {
        return h("div", {className: "Post-container"}, [
            h("h3", null, aPost.title),
            h("p", null, aPost.body),
            h("button", {onClick: () => deleteButtonEventHandler(aPost), className: "button"}, "Delete"),
            h("button", {onClick: () => editButtonEventHandler(aPost), className: "button"}, "Edit")
        ]);
    }
}



// refactor with .map
let BlogList = function(objectFullOfBlogPosts) {
    let array = objectFullOfBlogPosts.listOfBlogPosts;
    let newArray = [];
    array.forEach(element => { 
        let newElement = h(Post, element ); // THE ELEMENT OBJECT...PASS IN USEFUL "STATE" DATA
        newArray.push(newElement);
    });
    return newArray;
}


let Footer = function() {
    return h("p", null, "Copyright 2018");
}


let Page = function() {
    return h("main", {
        className: "Main"}, [
        h(Header, user),
        h("div", {className: "BlogList-container"}, [h(BlogList, blogPostsObject)]),
        h(Footer, null)
    ]);
}


let update = function() {
    ReactDOM.render(h(Page, null), root);
}


update();

// Object.assign({}, originalObject);

// class myComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = blogs: props.blogs };
//     }
// }

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