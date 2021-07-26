
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
var hours=[];
var todayObject= moment().toObject();
console.log(todayObject);
var time=document.querySelector('#datetime')
var today= moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
time.innerHTML=today

var todayUpdate= setInterval(function(){
    var today= moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    time.innerHTML=today
}, 1000)

console.log(today)

// create a row for each hour of the day. 
var hourRow=$('<div>');
hourRow.html(todayObject.hours);
timecontainer.append(hourRow)
