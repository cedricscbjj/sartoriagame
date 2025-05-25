document.getElementById("start-btn").addEventListener("click", startGame);

document.getElementById("start-btn").addEventListener("click", function () {
    const row = document.querySelector(".row");
    row.classList.remove("hidden");
  });

let currentIndex = 0;
selectedImages = [];

function startGame() {
  selectedImages = getRandomImages();
  currentIndex = 0;
  document.getElementById("intro").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  loadNextImage();
}

function loadNextImage() {
  const carrousel = document.getElementById("carrousel");
  carrousel.innerHTML = ""; // Nettoyer

  const imgObj = selectedImages[currentIndex];
  const card = document.createElement("div");
  card.className = "card";
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

  setupSwipe(card, imgObj);
}

function setupSwipe(card, imgObj) {
    const hammer = new Hammer(card);
    hammer.get("pan").set({ direction: Hammer.DIRECTION_ALL });
  
    let startX = 0;
  
    hammer.on("panstart", () => {
      card.classList.add("dragging");
    });
  
    hammer.on("panmove", (ev) => {
      const deltaX = ev.deltaX;
      const rotate = deltaX / 10;
      card.style.transform = `translateX(${deltaX}px) rotate(${rotate}deg)`;
    });
  
    hammer.on("panend", (ev) => {
      card.classList.remove("dragging");
  
      const threshold = 100;
  
      if (ev.deltaX > threshold) {
        // swipe right
        card.style.transform = "translateX(1000px) rotate(20deg)";
        setTimeout(() => handleSwipe("right", imgObj), 300);
      } else if (ev.deltaX < -threshold) {
        // swipe left
        card.style.transform = "translateX(-1000px) rotate(-20deg)";
        setTimeout(() => handleSwipe("left", imgObj), 300);
      } else {
        // retour à la position initiale
        card.style.transform = "translateX(0px) rotate(0deg)";
      }
    });
  }

function handleSwipe(direction, imgObj) {
  const isClasse = imgObj.isClasse;

  const goodAnswer = (direction === "left" && isClasse) || (direction === "right" && !isClasse);

  if (goodAnswer) {
    currentIndex++;
    if (currentIndex >= selectedImages.length) {
      alert("Bravo ! Tu as terminé la partie !");
      restartGame();
    } else {
      loadNextImage();
    }
  } else {
    alert("Mauvaise réponse. Partie terminée.");
    restartGame();
  }
}

function restartGame() {
  document.getElementById("game-container").style.display = "none";
  document.getElementById("intro").style.display = "block";
}

function showModal(text) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `<div class="modal-content"><p>${text}</p><span class="close" onclick="closeModal()">×</span></div>`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
