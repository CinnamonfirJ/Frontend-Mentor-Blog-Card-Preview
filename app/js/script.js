let card = document.getElementById("blog-card");
let shadow = document.getElementById("shadow");

card.addEventListener("mouseover", () => {
  shadow.classList.add("shift");
});

card.addEventListener("mouseout", () => {
  shadow.classList.remove("shift");
});
