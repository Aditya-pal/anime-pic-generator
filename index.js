const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const imgEl = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    animeName.innerText = "Updating......<3";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get the anime";

    imgEl.src = data.url;
    animeName.innerText = data.artist;
  } catch (error) {}
});
