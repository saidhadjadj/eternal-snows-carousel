
   window.cartesData = [


 // 🏔️ MONTAGNES ENNEIGÉES  - 4 -
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/31316830/pexels-photo-31316830.jpeg?w=800&auto=format&fm=jpg',
    theme: '🏔️ Montagne immaculée',
    description: 'A mountain of pure white under the azure dome of heaven.'
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/34655582/pexels-photo-34655582.jpeg?w=800&auto=format&fm=jpg',
    theme: '🏔️ Montagne immaculée',
    description: 'A mountain of pure white under the azure dome of heaven.'
  },
   
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fm=jpg',
    theme: '🏔️ Mont Blanc',
    description: 'The roof of Europe, where climbers chase the sky.'
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/19468468/pexels-photo-19468468.jpeg?w=800&auto=format&fm=jpg',
    theme: '❄️ Montagne enneigée',
    description: 'In the cradle of winter, even dreams freeze to beauty.'
  },
//TRAÎNEAUX À CHIENS - 1 -
 {
  id: 5,
  imageUrl: 'https://images.pexels.com/photos/8884131/pexels-photo-8884131.jpeg?w=800&auto=format&fm=jpg',
  theme: '🐕 Traîneaux à chiens',
  description: 'Fur and breath in the white silence, the trail calls.'
},

//SPORTS DE MONTAGNE - 3 -

{
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fm=jpg',
    theme: '⛷️ Skieur', 
    description: 'Carving through virgin powder, the mountain becomes freedom.' 
  },

  {
    id: 7,
    imageUrl: "https://images.pexels.com/photos/6847695/pexels-photo-6847695.jpeg?w=800&auto=format&fm=jpg",
    theme: '🪂 Parapente',
    description: 'Flying over white giants, a bird among the peaks.'
  },

//AURORES BORÉALES

{
    id: 8,
    imageUrl: 'https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?w=800&auto=format&fm=jpg',
    theme: '🌌 Aurore boréale',
    description: 'Frozen summits hold the breath of the world under northern lights.'
  },
 
  {
    id: 9,
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fm=jpg',
    theme: '🌌 Aurore boréale',
    description: 'Pink and purple lights weave magic above the frozen land.'
  },
  
  
  // 🐕 TRAÎNEAUX À CHIENS

  {
    id: 10,
    imageUrl: 'https://images.pexels.com/photos/6831167/pexels-photo-6831167.jpeg?w=800&auto=format&fm=jpg',
    theme: '🎣 Pêche sur glace',
    description: 'Patience on frozen water, waiting for a silent catch.'
  },

  {
    id: 11,
    imageUrl: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?w=800&auto=format&fm=jpg',
    theme: '🏞️ Lac boréal',
    description: 'A mirror of ice framed by pines, reflecting the infinite.'
  },
  {
  id: 12,
  imageUrl: 'https://images.pexels.com/photos/5949396/pexels-photo-5949396.jpeg?w=800&auto=format&fm=jpg',
  theme: '🧊 Iceberg bleu',
  description: 'Inside the crystal cathedral, time itself has frozen still.'
},

   {
    id: 13,
    imageUrl: 'https://images.pexels.com/photos/11400916/pexels-photo-11400916.jpeg?w=800&auto=format&fm=jpg',
    theme: '🐻❄️ Ours polaire',
    description: 'A mother and cub, wrapped in mist and arctic tenderness.'
  },
  {
    id: 14,
    imageUrl: 'https://images.pexels.com/photos/12406964/pexels-photo-12406964.jpeg?w=800&auto=format&fm=jpg',
    theme: '🐻 Ours glacial',
    description: 'Bathing in frozen waters, king of the white realm.'
  },
  
{
  id: 15,
  imageUrl: 'https://images.pexels.com/photos/7127404/pexels-photo-7127404.jpeg?w=800&auto=format&fm=jpg',
  theme: '🧊 Expédition polaire',
  description: 'Under icy stalactites, explorers walk in ancient silence.'
},
   ];
// ============================================
// VARIABLES GLOBALES
// ============================================
const cartes = window.cartesData;
let currentIndex = 0;

let currentCard = 0;


// ============================================
// FONCTIONS
// ============================================

function loadCard(index) {
  const carte = cartes[index];
  if (!carte) return;

  const front = document.getElementById('front');
  const back = document.getElementById('back');

  // Face avant
  if (carte.imageUrl) {
    front.style.backgroundImage = `url('${carte.imageUrl}')`;
    front.style.backgroundSize = 'cover';
    front.style.backgroundPosition = 'center center';
  } else {
    front.style.backgroundImage = '';
    front.style.backgroundColor = '#1a2f3f';
  }

  // Face arrière améliorée
  back.innerHTML = `
    <div class="card-back-content">
      <h2 class="card-back-title">${carte.theme}</h2>
      <p class="card-back-description">${carte.description}</p>
    </div>
  `;
}

function nextCard() {
  currentCard = (currentCard + 1) % cartes.length;
  loadCard(currentCard);
}

function previousCard() {
  currentCard = (currentCard - 1 + cartes.length) % cartes.length;
  loadCard(currentCard);
}

function startCarousel() {
  document.getElementById('introPage').style.display = 'none';
  document.getElementById('carouselPage').style.display = 'flex';
  currentCard = 0;   // ← ligne importante
  loadCard(0);
}

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Eternal Snows prêt,', cartes.length, 'images chargées');
});

// Exposer les fonctions globalement pour le HTML

window.startCarousel = startCarousel;
window.nextCard = nextCard;
window.previousCard = previousCard;

loadCard(0)

startCarousel()
