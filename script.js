const car = document.getElementById("car");
const step = 8; // Antall piksler bilen flytter seg per tastetrykk

// Flytt bilen med piltaster
document.addEventListener("keydown", function (event) {
  let x = parseInt(car.style.left);
  let y = parseInt(car.style.top);

  if (event.key === "ArrowUp") y = y - step;
  if (event.key === "ArrowDown") y = y + step;
  if (event.key === "ArrowLeft") x = x - step;
  if (event.key === "ArrowRight") x = x + step;

  // Hold bilen innenfor vinduets grenser
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > window.innerWidth - 36) x = window.innerWidth - 36;
  if (y > window.innerHeight - 36) y = window.innerHeight - 36;

  car.style.left = x + "px";
  car.style.top = y + "px";
});

// Flytt bilen dit brukeren klikker
document.addEventListener("click", function (event) {
  // Henter wrapperen sin faktiske posisjon i viewporten
  const wrapper = document.getElementById("track-wrapper");
  const rect = wrapper.getBoundingClientRect();

  // Trekker fra wrapperen sin offset så koordinatene blir relative til den
  let x = event.clientX - rect.left - 14;
  let y = event.clientY - rect.top - 14;

  // Hold bilen innenfor vinduets grenser
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > window.innerWidth - 36) x = window.innerWidth - 36;
  if (y > window.innerHeight - 36) y = window.innerHeight - 36;

  car.style.left = x + "px";
  car.style.top = y + "px";
});
