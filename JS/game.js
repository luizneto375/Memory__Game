const grid = document.querySelector('.grid');

const characters = [
    'im01',
    'im02',
    'im03',
    'im04',
    'im05',
    'im06',
    'im07',
    'im08',
    'im09',
    'im10',
    'im11',
    'im12',
    'im13',
    'im14',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let firstCard = '';
let secondCard = '';

const checkCards = () => {

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card'); 
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

   

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('/imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character );

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);



    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();