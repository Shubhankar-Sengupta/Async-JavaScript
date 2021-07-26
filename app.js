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
            success('It worked out fine !!!');
        }

    }, delay);

}


ServerRequestAPI('services.com/page1', (success) => {

    console.log("It worked (1st request)");
    console.log(success);

    ServerRequestAPI('services.com/page2',

        (success) => {
            console.log("It worked (2nd request)");
            console.log(success);

            ServerRequestAPI('services.com/page3',

                (success) => {
                    console.log("It worked (3rd request)");
                    console.log(success);
                },

                (fail) => {
                    console.log("Oops an error occured!!", fail);
                })
        },

        (fail) => {
            console.log("Oops an error occured!!", fail);
        })
},

    (fail) => {
        console.log("Oops an error occured!!", fail);
    })




