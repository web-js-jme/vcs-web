
const cards = document.querySelectorAll('.card');
const checkmarks = document.querySelectorAll('.card .checkmark');
const recipe = document.querySelector('.ingredients-list');
recipe.innerHTML = '<p> Nothing to display </p>';
const receptai = 
[ 
 {
    title: 'Vistiena su salotomis',
    varske: '800 g Dvaro 9%',
    kiausiniai: 6,
    kruopos: '5 saukstai',
    pienas: '150 ml',
    sviestas: '100g',
    cukrus: '4 saukstai'
 },
 {
    title: 'Tortas su melynemis',
    varske: '800 g Dvaro 9%',
    kiausiniai: 6,
    kruopos: '5 saukstai',
    pienas: '150 ml',
    sviestas: '100g',
    cukrus: '4 saukstai'
 },
 {
    title: 'Makaronai su mesa',
    varske: '800 g Dvaro 9%',
    kiausiniai: 6,
    kruopos: '5 saukstai',
    pienas: '150 ml',
    sviestas: '100g',
    cukrus: '4 saukstai'

 }
]

cards.forEach(( element, index ) => {
    element.addEventListener('click', () => {
        checkmarks.forEach(check => {
            check.style.display = 'none';
        });
        const checkmark = element.querySelector('.checkmark');

        checkmark.style.display = 'block';
        recipe.innerHTML = `
        <ul> 
        <li><h2>${receptai[index].title}</h2></li>
        <li>${receptai[index].varske}</li> 
        <li>${receptai[index].kiausiniai}</li>
        <li>${receptai[index].kruopos}</li> 
        <li>${receptai[index].pienas}</li>
        <li>${ receptai[index].sviestas}</li> 
        <li>${receptai[index].cukrus}</li>
        </ul>`;
    });
});


const selectedCountOfPeople = document.getElementById('portion-count');
selectedCountOfPeople.value = 0;

function displaySelectedValue(value) {
    selectedCountOfPeople.innerHTML = `${ selectedCountOfPeople.valuee = value}`;
}