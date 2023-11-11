let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

const container$$ = document.querySelector('.b-grid');
let score = 0;
let attempts = 0;

for (const card of cardArray) {
    const item$$ = document.createElement('div');
    item$$.classList.add('item');
    item$$.addEventListener('click', showImg$$);

    const img$$ = document.createElement('img');
    img$$.src = card.img;
    img$$.alt = card.name;
    img$$.classList.add('hidden');
    item$$.appendChild(img$$);

    container$$.appendChild(item$$);
}

let firstImg$$ = null;

function showImg$$() {
    const img$$ = this.querySelector('img');
    img$$.classList.remove('hidden');
    if (firstImg$$ === null) {
        firstImg$$ = img$$;
    } else {
        if (firstImg$$ !== img$$) {
            attempts++;
            checkImgs$$(firstImg$$, img$$);
            firstImg$$ = null;
        }
    }
}

function checkImgs$$ (firstImg$$, secondImg$$) {
    const firstImgSrc$$ = firstImg$$.getAttribute('src');
    const secondImgSrc$$ = secondImg$$.getAttribute('src');
    if (firstImgSrc$$ !== secondImgSrc$$) {
        setTimeout(() => {
            firstImg$$.classList.add('hidden');
            secondImg$$.classList.add('hidden');
        }, 800);
    } else {
        score++;
        if (score === cardArray.length / 2) {
            alert('¡Felicidades! Has encontrado todas las parejas.');
        }
    }

    updateScore();
}

function updateScore() {
    document.querySelector('[data-function="score"]').textContent = score;
    document.querySelector('[data-function="attempts"]').textContent = attempts;
}



























/*
let cards = document.querySelectorAll('.card');
let selectedCards = [];
let score = 0;
let attempts = 0;
let pairsFound = 0;

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains('selected') && !this.classList.contains('matched')) {
        this.classList.add('selected');
        this.src = 'public/exercise-1/' + cardArray[this.dataset.index].name + '.svg';
        selectedCards.push(this);
        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.src === card2.src) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        pairsFound++;
        score++;
        if (pairsFound === cardArray.length / 2) {
            alert('¡Felicidades! Has encontrado todas las parejas.');
        }
    } else {
        card1.src = 'public/exercise-1/universe.svg';
        card2.src = 'public/exercise-1/universe.svg';
        attempts++;
    }
    selectedCards = [];
    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
    document.getElementById('attempts').textContent = 'Intentos: ' + attempts;
}
*/