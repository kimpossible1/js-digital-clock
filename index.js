// Your code here

let updateTime = function updateTime() {
  let dateToday = new Date();
  let hours = dateToday.getHours();
  let minutes = dateToday.getMinutes();
  let seconds = dateToday.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
  $('#clock').html(time);
};

$(document).ready(()=> {
setInterval(updateTime, 1000);
});
