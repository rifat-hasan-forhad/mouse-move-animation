const curser = document.getElementById("curser");
const glow = document.getElementById("curser-glow");

document.addEventListener("mousemove", (e) => {
  curser.style.left = e.x + "px";
  curser.style.top = e.y + "px";

  glow.style.left = e.x - 150 + "px";
  glow.style.top = e.y - 150 + "px";
});
