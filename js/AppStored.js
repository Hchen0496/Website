const appContainer = document.querySelector(".appContainers");
const apps = [
  {
    name: "Xpression",
    image: "https://via.placeholder.com/200x130"
  },
  { name: "Mental-Health", image: "https://via.placeholder.com/200x130" },
  { name: "Game-Post", image: "https://via.placeholder.com/200x130" },
  { name: "Web-Post", image: "https://via.placeholder.com/200x130" }
];

const showApps = () => {
  let output = "";
  apps.forEach(
    ({ name, image }) =>
      (output += (
        <div class="square">
          <img class="square-Pic" src={image} />
          <h1 class="square-title">${name}</h1>
          <a class="square-link" href="#">
            Click Here
          </a>
        </div>
      ))
  );
  container.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showApps);
