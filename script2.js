document.getElementById("start-btn").addEventListener("click", startGame);

let currentIndex = 0;
let stack;

function startGame() {
  selectedImages = getRandomImages();
  currentIndex = 0;
  document.getElementById("intro").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  initializeCarrousel();
}

function initializeCarrousel() {
  const carrousel = document.getElementById("carrousel");
  carrousel.innerHTML = ""; // Reset

  selectedImages.forEach((imgObj, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    card.dataset.isClasse = imgObj.isClasse;
    card.style.backgroundImage = `url(${imgObj.src})`;

    if (imgObj.hasModal) {
      const infoIcon = document.createElement("span");
      infoIcon.textContent = "ℹ️";
      infoIcon.classList.add("info-icon");
      infoIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        showModal(imgObj.modalText);
      });
      card.appendChild(infoIcon);
    }

    carrousel.appendChild(card);
  });

  setupSwipe();
}

function setupSwipe() {
  const cards = document.querySelectorAll(".card");
  const stackConfig = {
    throwOutConfidence: () => 1,
    minThrowOutDistance: 50
  };

  stack = Swing.Stack(stackConfig);

  cards.forEach(card => stack.createCard(card));

  stack.on('throwout', (e) => {
    const isClasse = e.target.dataset.isClasse === "true";
    const direction = e.throwDirection === Swing.Direction.LEFT ? 'left' : 'right';

    if ((direction === 'left' && isClasse) || (direction === 'right' && !isClasse)) {
      currentIndex++;
      if (currentIndex >= selectedImages.length) {
        alert("Bravo ! Tu as terminé la partie !");
        restartGame();
      }
    } else {
      alert("Mauvaise réponse. Partie terminée.");
      restartGame();
    }

    e.target.remove();
  });
}

function restartGame() {
  document.getElementById("game-container").style.display = "none";
  document.getElementById("intro").style.display = "block";
}

function showModal(text) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `<div class="modal-content"><p>${text}</p><button onclick="closeModal()">Fermer</button></div>`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
