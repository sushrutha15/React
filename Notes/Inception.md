Episode-1
                                     *****    Inception- Assignment     *****   
************ Theory *********************************************************************************************************

1. What is Emmet?
Emmet is a toolkit for webdevelopers.For example in VS code whenyou type "html:5" it gives the basic html 
skeleton. This is an example of Emmet.

2. Difference between a Library and Framework?
Library has a small portion of code. React is a library as it works on specific part of code where we make it 
root. Framework has all the things inside it. It is like a complete packagae with everything side it.

3. What is CDN? Why do we use it?
CDN is a website which has react in it. We take react related links from CDN and use it in our projects.

4. Why is React known as React?
React is called React because it reacts quickly to changes without reloading the whole page.t uses the virtual
DOM to efficiently update parts of a webpage

5. What is crossorigin in script tag?
Cross origin refers to the situation when a request from one origin is made to another origin to fetch data from
that origin. f a web page from https://example.com tries to fetch data from https://api.anotherdomain.com,
 this is considered a cross-origin request.

6. What is diference between React and ReactDOM?
React has the core React inside it and ReactDOM is used to do the DOM manipulations. ReactDOM has methods 
that are used to interact with DOM

7. What is difference between react.development.js and react.production.js files via CDN?
The development version includes extra warnings about common mistakes, whereas the production version includes
extra performance optimizations and strips all error message

8. What is async and defer?
Async- HTML parsing continues and the script tag is fetched from the network and after fetching the script tag
executes. While the script tag is executing the html parsing stops and again continues once the script tag
finishes the execution
Defer- In case of defer inside the script tag the html parsing continues and while the html parsing contines
the script tag is fetched from the network and the html parsing contiues. Only after the HTML parsing ends the
script tag executes.

************* Coding *****************************************************************************************************

// create hello world from basic HTML //
<body>
<div>
<h1> Hello World from HTML </h1>
</div>
</body>

// create hello world from basic Javascript //
<body>
<div id= root>
const heading = document.createElement("h1")
heading.innerHTML="Hello World from Javascript"
const root= document.getElementById("root")
root.appendChild(heading)
</div>
</body>

// create hello world from React //
<body>
<div id ="root">
const heading = React.createElement("h1",{},"Hello World from React")
const root= ReactDOM.createRoot(document.getElementById("root")
root.render(heading)
</div>
</body>

// nested elements in react //
** < div id="parent">
    < div id="child">
      <h1> I'm h1 tag </h1>
    </div>
   </div> **

   const heading = React.createElement("div",{id:"parent"}, React.createElement("div",{id: "child"},
   React.createElement("h1",{},"I'm h1 tag")));
   const root= ReactDOM.createRoot(document.getElementById("root")
   root.render(heading) 

// siblings inside child //
** < div id="parent">
    < div id="child">
      <h1> I'm h1 tag </h1>
      <h2> I'm h1 tag </h2>
    </div>
   </div> **

   const heading = React.createElement("div",{id:"parent"}, React.createElement("div",{id: "child"},
   [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]));
   const root= ReactDOM.createRoot(document.getElementById("root")
   root.render(heading) 

//silings for id child //
** < div id="parent">
    < div id="child">
      <h1> I'm h1 tag </h1>
      <h2> I'm h1 tag </h2>

       <div id="child2">
       <h1> I'm h1 tag </h1>
      <h2> I'm h1 tag </h2>
       </div>
    </div>
   </div> **

const heading = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{id: "head"},"I'm the h1 tag"), React.createElement("h2",{},"I'm h2 tag")]
), 
    React.createElement("div",{id:"child2"}, 
    [React.createElement("h1",{id: "head"},"I'm the h1 tag"), React.createElement("h2",{},"I'm h2 tag")])])

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


