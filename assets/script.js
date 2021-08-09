
// // created date & time timestampp
// var datetime = null,
//         date = null;

// var update = function () {
//     date = moment(new Date())
//     datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
// };

// $(document).ready(function(){
//     date = $('#datetime')
//     update();
//     setInterval(update, 1000);
// });
var textBox1 = document.querySelector("#textbox-1")
var textBox2 = document.querySelector("#textbox-2")
var textBox3 = document.querySelector("#textbox-3")
var textBox4 = document.querySelector("#textbox-4")
var textBox5 = document.querySelector("#textbox-5")
var textBox6 = document.querySelector("#textbox-6")
var textBox7 = document.querySelector("#textbox-7")
var textBox8 = document.querySelector("#textbox-8")
var textBox9 = document.querySelector("#textbox-9")

// if moment of time (now) is greater than textbox1 (time) then style color to white(css class of .past)

// if moment of time (now) is equal than textbox1 (time) then style color to red (css class of .present)

// if moment of time (now) is less than textbox1 (time) then style color to green (css class of .future)

var timeContainer = document.querySelectorAll('.time-container')

for (let eachTime of timeContainer) {
    var time = eachTime.innerText
    var parts = time.split(" ");
    var hourMinute = parts[0].split(":")

    var currentDate = moment().format("YYYY-MM-DD")
    var eachTimeNow = `${currentDate} ${hourMinute[0]}:${hourMinute[1]} ${parts[1]}`
    var eachTimeMoment = moment(eachTimeNow, "YYYY-MM-DD HH:mm a")
    if (eachTimeMoment.isSame(moment(), 'hour')) {
        eachTime.parentElement.parentElement.children[1].classList.add('present')
    } else if (eachTimeMoment.isBefore(moment())) {
        eachTime.parentElement.parentElement.children[1].classList.add('past')
    } else {
        eachTime.parentElement.parentElement.children[1].classList.add('future')
    }
    // can you hear me
}

var hours = [];
var todayObject = moment().toObject();
console.log(todayObject);
var time = document.querySelector('#datetime')
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
time.innerHTML = today

var todayUpdate = setInterval(function () {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    time.innerHTML = today
}, 1000)

console.log(today)

