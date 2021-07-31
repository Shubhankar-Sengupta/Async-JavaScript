// console.log ("Hello! it's working");

// window.setTimeout(() => {// This is a web Api and would be handled by the browser till the time noted is over and JS is still single-threaded.
//     //by that time it executes rest of the other lines of code till this code executes.
//     console.log("These are the result data from the server");

// },4000)

// console.log('Hello');

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 3000)
//     }, 3000)
// }, 3000)


// this one is for a determined time like 1s,2s or 3s 

// function delayedColorChange(newColor, delay, doNext) {

//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('lawngreen', 3000, () => {

//     delayedColorChange('yellow', 3000, () => {

//         delayedColorChange('green', 3000, () => {

//         })

//     });
// });



//here we do not know how much time is it going to take hence we arrange it in a callback 
// this is also termed as callback hell

// saveToDatabase('thin blue line', () => {

//     saveToDB(movies, () => {
//             //if it works run this
//     }, ()=> {
//         //if it d9oesn't work run this code
//     })
// }, () => { 
//     // if the API is down run this line of code
// })



function ServerRequestAPI(url, success, faliure) {

    const delay = Math.floor((Math.random() * 4500)) + 500;

    setTimeout(() => {

        if (delay > 4000) {
            faliure('Connection timed out (:');
        }

        else {
            success(`It worked out fine !!! for ${url}`);
        }

    }, delay);

}


// ServerRequestAPI('services.com/page1', (success) => {

//     console.log("It worked (1st request)");
//     console.log(success);

//     ServerRequestAPI('services.com/page2',

//         (success) => {
//             console.log("It worked (2nd request)");
//             console.log(success);

//             ServerRequestAPI('services.com/page3',

//                 (success) => {
//                     console.log("It worked (3rd request)");
//                     console.log(success);
//                 },

//                 (fail) => {
//                     console.log("Oops an error occured!!", fail);
//                 })
//         },

//         (fail) => {
//             console.log("Oops an error occured!!", fail);
//         })
// },

//     (fail) => {
//         console.log("Oops an error occured!!", fail);
//     })




const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}



// fakeRequestPromise('services.com/api/page1')

//     .then(
//         (resolve) => {
//             console.log(`It is resolved for page1 and ${resolve}`)

//             fakeRequestPromise('services.com/api/page2')
//                 .then(
//                     (resolve) => {
//                         console.log(`It is resolved for page2 and ${resolve}`)
//                     }
//                 )
//                 .catch((reject) => {
//                     console.log(`Oh no Error: ${reject} page2`)
//                 })
//         }
//     )
//     .catch((reject) => {
//         console.log(`Oh no Error: ${reject} page1`)

//     })



// fakeRequestPromise('services.com/api/page1')

//     .then((resolve) => {

//         console.log('It worked!!')

//         console.log(resolve)

//         return fakeRequestPromise('services.com/api/page2') // this returns a new Promise object whose status might be pending, resolved or reject between an indefinite period of time.
//     })

//     .then((resolve) => { // we again use the then method over that returned promise object if in case it is resolved. 

//         console.log('It worked!!')

//         console.log(resolve)

//         return fakeRequestPromise('services.com/api/page3')
//     })


//     .then((resolve) => { // we again use the then method over that returned promise object if in case it is resolved. 

//         console.log('It worked!!')

//         console.log(resolve)
//     })

//     .catch((reject) => {
//         console.log('It Request failed', reject) // if in case anything goes wrong on any promise object and the promise is rejected then this catch method over that returned promise object runs.
//     })




//     const delayedColorChange = (color, delay) => {

//         // the function being passed into the Promise constructor
//         const  changeColourAfterDelay = (resolve, reject) => {
//             setTimeout(() => {
//               document.body.style.backgroundColor = color;
//               resolve();
//             }, delay);
//           }


//         return new Promise(changeColourAfterDelay);
//       };


// delayedColorChange('red', 1000).then(() => delayedColorChange('orange', 1000))

// let bgChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve(color);
//         }, delay);
//     });
// };

// bgChange("black", 1000)
//     .then(color => {
//         console.log(color)
//         return bgChange("blue", 1000)
//     })
//     .then(color => {
//         console.log(color)
//         return bgChange("yellow", 1000);
//     })
//     .then(color => {
//         console.log(color)
//         return bgChange("red", 1000);
//     })
//     .then(color => {
//         console.log(color)
//         return bgChange("violet", 1000);
//     })

//     .then(color => {
//         console.log(color);
//     })


// const delay = setTimeout(()=> { // It's a handle (a unique identifier). When you create a timeout, the JavaScript runtime associates a handle with the timeout you created, and it can identify that timeout by the handle setTimeout()
//     console.log("Hello")
// },2000)

// // clearTimeout(delay) // it is used to clear the function that is going to run after 11 seconds. It uniquely identifies by the task_id associated with it.

// async function Color(color, delay) { // automatically returns a resolved promise and if in case we return something then it returns it with that value.

//     return setTimeout(() => {
//         document.body.style.backgroundColor = color;
//     }, delay)

//     //setTimeout() callback function is returned as a value of the resolved promise.
// }

// Color('red', 1000)

//     .then((data) => {
//         console.log(data);
//         return Color('yellow', 1000)
//     })

//     .then((data) => console.log(data))


// hypothetical data on the server

// posts = [
//     { name: "Shubhankar", comments: "Understanding Async JavaScript" },
//     { name: "Ashit", comments: "Understanding Reports" }
// ]

// posts.forEach((data) => console.log(data.name))


// creating a Promise to be either resolved or rejected and sent as a request to the hypothetical server. It may take time hence to mimic we are using setTimeout() callback function.
// we first create a function which we will execute later on.

// function bringPosts() {

//     return new Promise((resolve, reject) => { // this is a promise constructor

//         // both resolve and reject are callbacks
//         // reject('An error occurred'); // rejected with  a value.
//         // it takes time to bring the post as it's on the server hence the promise might get rejected or resolved and with the data or value.
//         //We are using setTimeout() an asynchronous action, to carry that delay procedure  and its delayed by the amount you want it to delay. 

//         let error = false;


//         if (!error) {

//             setTimeout(() => {

//                 let output = '';

//                 posts.forEach((post) => {
//                     output += `<li> ${post.name} -${post.comments} </li>`
//                     document.body.innerHTML = output;
//                 })

//                 resolve('Displayed the posts');

//             }, 2000)

//         }

//         else {
//             reject('Result failed');
//         }
//     })
// }


// const data = bringPosts();
// console.log(data)

// bringPosts().then((data) => console.log(data)).catch((err) => console.log('An error occured', err))

// alternate to write this without the tension of then and catch.


// async function init() {
//     let data = await bringPosts(); //await is used with promise and since bringPosts() returns promise and is asynchronous we use await
//     console.log(data)
// }

// init();