console.log ("Hello! it's working");

window.setTimeout(() => {// This is a web Api and would be handled by the browser till the time noted is over and JS is still single-threaded.
    //by that time it executes rest of the other lines of code till this code executes.
    console.log("These are the result data from the server");

},4000)

console.log('Hello');