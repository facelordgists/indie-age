document.documentElement.className = 'js';

var born = new Date("October 2, 2016 12:00:00");

// Separate numbers into thousands using commas
function commafy( num){
  var parts = (''+(num<0?-num:num)).split("."), s=parts[0], L, i=L= s.length, o='';
  while(i--){ o = (i===0?'':((L-i)%3?'':',')) 
                  +s.charAt(i) +o }
  return (num<0?'-':'') + o + (parts[1] ? '.' + parts[1] : ''); 
}
function dateDiff() {
    
  var created = moment(born);
  now = moment();

  var time_diff = {
    second_diff: now.diff(created, 'seconds'),
    minute_diff: now.diff(created, 'minutes'),
    hour_diff: now.diff(created, 'hours'),
    day_diff: now.diff(created, 'days'),
    week_diff: now.diff(created, 'week'),
    month_diff: now.diff(created, 'Months'),
    year_diff: now.diff(created, 'Years')
  }
  time_diff.day_suffix = (time_diff.day_diff > 1) ? " Days" : " Day";
  time_diff.week_suffix = (time_diff.week_diff > 1) ? " Weeks" : " Week";
  time_diff.month_suffix = (time_diff.month_diff > 1) ? " Months" : " Month";
  time_diff.year_suffix = (time_diff.year_diff === 1) ? " Year" : " Years";

  document.getElementById("secs").innerHTML  = commafy(time_diff.second_diff) + " Seconds";
  document.getElementById("mins").innerHTML  = commafy(time_diff.minute_diff) + " Minutes";
  document.getElementById("hours").innerHTML = commafy(time_diff.hour_diff) + " Hours";
  document.getElementById("days").innerHTML  = commafy(time_diff.day_diff) + time_diff.day_suffix;
  document.getElementById("weeks").innerHTML = commafy(time_diff.week_diff) + time_diff.week_suffix;
  document.getElementById("months").innerHTML = commafy(time_diff.month_diff) + time_diff.month_suffix;
  if(time_diff.year_diff > 0){
    document.getElementById("years").innerHTML = commafy(time_diff.year_diff) + time_diff.year_suffix;
  }

  // Use countdown js library to produce a sectional breakdown 
  document.getElementById("total").innerHTML = countdown( born ).toString();

  setTimeout(function() {
    dateDiff();
  }, 1000);
}
window.onload = dateDiff();


function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex]  + ' ' + day + ' ' + year;
}
window.onload = function(){
  document.getElementById("birthdate").innerHTML = formatDate(born); 
}

// var getDaysInMonth = function(month,year,zero=true) {
  
//   if(zero == true){
//     // Here January is 0 based  
//     return new Date(year, month+1, 0).getDate();
//   } else {
//     // Here January is 1 based
//     // Day 0 is the last day in the previous month
//    return new Date(year, month, 0).getDate();
//   }
// }