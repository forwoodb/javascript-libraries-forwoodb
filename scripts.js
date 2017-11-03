const timeAtLoad = moment();

// Set the date string using formatting provided by moment.js
const dateString = timeAtLoad.format("dddd, MMMM Do, YYYY");
document.getElementById("current-date").textContent = dateString;

// Constantly reset the time string using formatting provided by moment.js
// and update it on the page.
function startTime() {
  const now = moment();
  const timeString = now.format("hh:mm:ss a");
  document.getElementById("current-time").textContent = timeString;

  // Set timeout that reruns startTime() every 1/2 second.
  const timeout = setTimeout(startTime, 500);
}
startTime();
