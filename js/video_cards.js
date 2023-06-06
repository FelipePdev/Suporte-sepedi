import { videos } from "../constants/videos.js";

const videoCards = document.querySelector("#video-cards");
const searchInput = document.querySelector("#default-search");

let filteredVideos = videos;

searchInput.addEventListener("keyup", (event) => {
  const debounce = setTimeout(() => {
    const searchTerm = event.target.value.toLowerCase();
    filteredVideos = videos.filter((video) => {
      const videoTitle = video.titulo.toLowerCase();
      const videoDescription = video.descricao.toLowerCase();

      return (
        videoTitle.includes(searchTerm) || videoDescription.includes(searchTerm)
      );
    });
    videoCards.innerHTML = "";
    renderCards();

    new HR(".card-title", {
      highlight: searchTerm,
      backgroundColor: "#B4FFEB",
    }).hr();
  }, 300);

  debounce.clearTimeout();
});

function generateVideoTemplate(video) {
  const template = `
    <div class="card w-full sm:w-72 rounded-lg">
    <div class="card-body rounded-lg">
      <h4 class="card-title font-bold text-[#016db5]">
        ${video.titulo}
      </h4>
      <p class="card-text">
        ${video.descricao}    
      </p>
      <a
        href="${video.link}"
        target="_blank"
        class="block bg-blue-500 text-[#fff] font-bold rounded-lg py-2 px-4 mt-12 flex items-center justify-center hover:text-[#fff] hover:bg-[#016db5]"
        >Assistir Video</a
      >
    </div>
  </div>
`;
  return template;
}

function createCard(video) {
  const cardTemplate = generateVideoTemplate(video);
  const cardElement = document.createElement("div");
  cardElement.innerHTML = cardTemplate;

  return cardElement;
}

function appendCard(card) {
  videoCards.appendChild(card);
}

function renderCards() {
  filteredVideos.forEach((video, index) => {
    if (index > 8) return;
    const card = createCard(video);
    appendCard(card);
  });
}

window.onload = () => {
  renderCards();
};
