// let btn = document.getElementById("btn");

// setTimeout(() => {
//   //   console.log("hello");

//   let title = document.createElement("h1");
//   title.textContent = "Hello World";
//   document.body.appendChild(title);
// }, 5000);
// let interval = setInterval(() => {
//   let title = document.createElement("h1");
//   title.textContent = "Hello World!";
//   document.body.appendChild(title);
// }, 1000);
// btn.onclick = () => {
//   clearInterval(interval);
// };

// let day = new Date();
// console.log(day);

// let day = setInterval(() => {
//   let day = new Date();
//   console.log(day);
// }, 1000);

// let secode = document.getElementById("second")
function updateClock() {
  let now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateClock, 1000);
updateClock();
