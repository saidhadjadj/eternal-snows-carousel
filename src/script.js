
const cartes = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000',
    titre: '🏔️ Mont Blanc',
    description: 'Highest peak in the Alps<br>4,808 meters (15,774 ft)<br>France-Italy border'
  },
  {
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1000',
    titre: '🌄 Snowy Peak',
    description: 'Majestic snow-capped mountain<br>Golden hour sunset<br>Alpine winter landscape'
  },
  {
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69d9d7aa?w=1000',
    titre: '⛰️ Dolomites',
    description: 'Italian mountain range<br>Spectacular sunset glow<br>Permanent snow cover'
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622b4f7f4?w=1000',
    titre: '❄️ Glacial Peak',
    description: 'Ice-covered summit<br>Extreme cold conditions<br>Eternal snow fields'
  }
];

let currentIndex = 0;

function loadCard(index) {
  const carte = cartes[index];
  const front = document.getElementById('front');
  const back = document.getElementById('back');
  
  front.style.backgroundImage = `url(${carte.image})`;
  back.innerHTML = `
    <h2>${carte.titre}</h2>
    <p>${carte.description}</p>
  `;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cartes.length;
  loadCard(currentIndex);
}

function previousCard() {
  currentIndex = (currentIndex - 1 + cartes.length) % cartes.length;
  loadCard(currentIndex);
}

function startCarousel() {
  document.getElementById('introPage').classList.add('hidden');
  document.getElementById('carouselPage').classList.add('active');
  setTimeout(() => loadCard(0), 800);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  // Attendre le clic sur le bouton
});
