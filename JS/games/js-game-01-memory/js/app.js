document.addEventListener('DOMContentLoader', () => {
    const cardArray = [
        {
            name: 'bread',
            img: 'img/bread.png'
        },
        {
            name: 'bread',
            img: 'img/bread.png'
        },
        {
            name: 'chicken',
            img: 'img/chicken.png'
        },
        {
            name: 'chicken',
            img: 'img/chicken.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'muffins',
            img: 'img/muffins.png'
        },
        {
            name: 'muffins',
            img: 'img/muffins.png'
        },
        {
            name: 'salmon',
            img: 'img/salmon.png'
        },
        {
            name: 'salmon',
            img: 'img/salmon.png'
        },
        {
            name: 'soup',
            img: 'img/soup.png'
        },
        {
            name: 'soup',
            img: 'img/soup.png'
        }
    ]
    
    const grid = document.querySelector('.grid');
    cardArray.sort(() => 0.5 - Math.random());

    let selectedCards = [];
    let selectedCardsIds = [];

    function createGrid(array) {
        for(let i=0; i < array.length; i++) {
            console.log(array[i]);
            const card = document.createElement('img');
            card.setAttribute('src', 'img/leaves.png')
            card.setAttribute('data-image', array[i].name);
            card.addEventListener('click', () => {
             clickOnCard();
                
            });
            grid.appendChild(card);
        }
    }


    function clickOnCard(selectedCard, index) {
        selectedCards.push(array[i].name);
        selectedCardsIds.push(i);
        card.setAttribute('src', array[i].img);
        console.log(selectedCards, selectedCardsIds);

        if (selectedCards.length === 2) {
         setTimeout(() => {
            
         }, 500);
        }
    }

    function compareCards() {
        let cards = grid.querySelector('img');

        if (selectedCardsIds[0] === selectedCardsIds[1]) {
            alert('same card');
        } else {
            if(selectedCards[0] === selectedCards[1]) {
                let firstCard = cards[selectedCardsIds[0]];
                let secondCard = cards[selectedCardsIds[1]]

                firstCard.setAttribute('src', 'img/blank.png');
                secondCard.setAttribute('src', 'img/blank.png');

                firstCard.style.pointEvent = 'none';
                secondCard.style.pointEvent = 'none';


                alert('kortele su tuo paciom reiksmem')
            } else {
                alert('nesutampa');
            }
        }
    }

    createGrid(cardArray);
   
});