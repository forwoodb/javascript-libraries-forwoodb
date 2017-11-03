// Sets the current date to a readable string.
const currentDate = new Date();
const month = currentDate.getMonth();

const monthNames = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
]

const day = currentDate.getDate();
const year = currentDate.getFullYear();
const dateString = day + " " + monthNames[month] + " " + year;

// Displays the current date on the page.
document.getElementById("current-date").textContent = dateString;

function startTime() {
  const now = new Date();
  // Pull the hours out of the date.
  let hours = now.getHours();

  // Figure out if it's AM or PM.
  const meridiem = hours >= 12 ? "pm" : "am";

  // Let's use 12-hour time instead of 24 hour.
  hours = hours % 12;
  hours = hours ? hours : 12;

  // If the hour is a single digit, add a '0' in front of it.
  hours = hours < 10 ? '0' + hours : hours;

  // Pull the minutes out of the date.
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Pull the seconds out of the date.
  let seconds = now.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Build a string with the variables we made above.
  const timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Display the string on the document (our index.html page).
  document.getElementById("current-time").textContent = timeString;

  // Set timeout that reruns startTime() every 1/2 second.
  const timeout = setTimeout(startTime, 500);
}
startTime();

