// Get the End Of Year 
let CountdownYear = new Date("Dec 31, 2024 23:59:59").getTime();

// Create Coundter With SetIntervel
let Counter = setInterval(() => {

    // Get Date OF Now 
    let dateNow = new Date().getTime();

    // Get The Differnce Between The Date Now And The Date Of The END of Year 
    let diffDate = CountdownYear - dateNow;

    // Get time Unites
    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000);

    // Set Date TIme In The Document Element
    document.querySelector(".days").innerHTML = days < "10" ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < "10" ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < "10" ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < "10" ? `0${seconds}` : seconds;

    // Create Clear Interval
    if (diffDate < 0) {
        clearInterval(Counter);
    }

}, 1000);





// let isDone = false;

// function countdownToIftar() {

//     if (isDone === false) {
//         const countDown = setInterval(() => {

//             const now = new Date();
//             // console.log(now);
//             const iftarTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 30);
//             // console.log(iftarTime);

//             const timeRemaining = iftarTime - now;
//             const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
//             // console.log(hours);

//             const minutess = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
//             // console.log(minutess);

//             const seconds = Math.floor(timeRemaining % (1000 * 60) / (1000));
//             // console.log(seconds);

//             const timeNow = `${hours}:${minutess}:${seconds}`;
//             if (timeNow === "12:53:30") {
//                 clearInterval(countDown);
//                 isDone = true;
//                 console.log(isDone);
//             };


//             // return timeNow;
//             console.log(`Time remaining until Iftar:` + `${hours}:${minutess}:${seconds}`);
//             // console.log(`Time remaining until Iftar:` + timeNow);

//             // return `${hours}:${minutess}:${seconds}`;

//         }, 1000);
//     }

// }
// // console.log(isDone);


// console.log(`Time remaining until Iftar: ${countdownToIftar()}`);