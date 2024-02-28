console.log('==========FUNKCIJOS============');

// function testineFunkcija() {
//     return false;
// }

// let isTrue = testineFunkcija();
// console.log('RETURNED' + isTrue);

// isTrue ? console.log('its true here: ' + isTrue) : console.log('is not true'); 


// console.log('==========TASK 1============');
// let myName = 'Julija';
// let eilerastis = 'In placerat dolor ac leo imperdiet, a eleifend arcu mollis. Sed tempor felis et pellentesque dapibus. Nunc in semper massa. Proin sodales, ligula non accumsan tempus, sapien enim blandit purus, et euismod lorem turpis vel ipsum. Integer dictum tincidunt justo, vel sollicitudin urna fermentum vitae. Donec sed consequat leo. Nullam eu massa non erat ultricies fermentum. In molestie dolor venenatis pellentesque sagittis. Suspendisse mattis leo elit, nec eleifend augue molestie sed. Nunc nec luctus arcu, ut lobortis risus. Cras pretium leo eu quam tempus, bibendum aliquam risus convallis.'

// function returnMyName() {
//     return myName;
// }

// console.log('Mano vardas: ' + returnMyName());
// console.log('Mano vardas: ' + returnMyName());
// console.log('Mano vardas: ' + returnMyName());



// console.log('==========TASK 2============');

// function returnPoem() {
//     return eilerastis;
// }

// console.log('Mano eilerastis: ' + returnPoem());
// console.log('Mano eilerastis: ' + returnPoem());
// console.log('Mano eilerastis: ' + returnPoem());
// console.log('Mano eilerastis: ' + returnPoem());
// console.log('Mano eilerastis: ' + returnPoem());
// console.log('Mano eilerastis: ' + returnPoem());


// console.log('==========TASK 3============');

// let textToDisplay = 'My third text';


// function returnThreeTexts() {
    
//     console.log('Mano eilerastis: ' + returnPoem());
//     console.log('Mano vardas: ' + returnMyName());
//     console.log('Mano vardas: ' + textToDisplay);
// }

// console.log('Mano : ' + returnThreeTexts());



// console.log('==========TASK 5============');

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// function sumOf2Numbers() {
//     let random_number_1 = getRandomNumber();
//     let random_number_2 = getRandomNumber();

//     let sum = random_number_1 + random_number_2;
//     return sum;
// }

// console.log(sumOf2Numbers());



// console.log('==========TASK 6============');

// let policeInfo = {
//     name:'Police from object',
//     surname: 'Police surname from object',
//     age: 55,
//     salary: 8000,
//     fte: 1
// }

// let namePolice = 'Police name';
// let surname = 'Police surname';
// let age = 55;
// let salary =  8000;
// let fte =  1;

// function savePoliceInformation() {

//     let policeInfo = {
//         name:'Police from object',
//         surname: 'Police surname from object',
//         age: 55,
//         salary: 8000,
//         fte: 1
//     }

//     console.log(`VARDAS: ${namePolice}, pavarde ${surname}, amzius ${age}, alga: ${salary}, etatas: ${fte}`);
//     console.log(`VARDAS: ${policeInfo.name}, pavarde ${policeInfo.surname}, amzius ${policeInfo.age}, alga: ${policeInfo.salary}, etatas: ${policeInfo.fte}`);
// }

// savePoliceInformation();


// console.log('===============TASK 7===============');

// for(let index = 0; index <=10; index ++) {
//     console.log('Random number:' + getRandomNumber());
// }


// function get10RandomNumbers() {
//     let num1 = getRandomNumber();
//     let num2 = getRandomNumber(); 
//     let num3 = getRandomNumber(); 
//     let num4 = getRandomNumber();
//     let num5 = getRandomNumber();
//     let num6 = getRandomNumber();
//     let num7 = getRandomNumber(); 
//     let num8 = getRandomNumber();
//     let num9 = getRandomNumber(); 
//     let num10 = getRandomNumber();

//     for(let index = 0; index <=10; index ++) {
//         console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10 );
//     }
// }


// console.log('=========TASK 9============');

// let myName = 'Petriukas';

// sayHi('JULIJA');
// sayBye('Julija');

// sayHi(myName);
// sayBye(myName);

// function sayHi(name) {
//     console.log(`Labas:` + name);
// }

// function sayBye(name) {
//     console.log(`Atea:` + name);
// }




// console.log('=========TASK 10============');

// function identifyBiggerNumber(number1, number2) {

//     if(number1 > number2) {
//         console.log(`${number1} didesnis uz ${number2}`);
//     } else if (number1 === number2) {
//         console.log(`${number1} lygus skaiciui ${number2}`);
//     } else {
//         console.log(`${number1} maziau uz skaiciu ${number2}`);
//     }
// }

// identifyBiggerNumber(3,5);
// identifyBiggerNumber(10,8);
// identifyBiggerNumber(5,5);





// console.log('===========TASK 11===========');

// carData('Citroen', 'c3', 2000, 170);
// carData('Mazda', 'kazkokia', 1900, 120);
// carData('Audi', 'q3', 2023, 220);
// carData('BMW', 'didele', 2002, 200);


// function carData(marke, modelis, year, turis) {
//     console.log(`Nusipirkau automobili ${marke}, ${modelis}, ${year} metu, kurios darbinis turis yra ${turis} kw`);
// }



// console.log('===========TASK 12===========');

// function sumOfNumbers(number1, number2) {
//     let sum = number1 + number2;
//     console.log(`${number1} + ${number2} = ${sum}` );
// }

// function substractionOfNumbers(number1, number2) {
//     let result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}` );
// }

// function multiplyOfNumbers(number1, number2) {
//     let result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}` );
// }

// function divOfNumbers(number1, number2) {
//     let result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}` );
// }

// function createRandomDigitsToUseInAboveFunction() {
//     let random1 = Math.floor(Math.random() * 10);
//     let random2 = Math.floor(Math.random() * 10);

//     sumOfNumbers(random1, random2);
//     substractionOfNumbers(random1, random2);
//     multiplyOfNumbers(random1, random2);
//     divOfNumbers(random1, random2);
// }



// sumOfNumbers(2,5);
// substractionOfNumbers(10,7);
// multiplyOfNumbers(2,5);
// divOfNumbers(10,5);
// console.log('=========')
// createRandomDigitsToUseInAboveFunction();



// console.log('=========TASK 13============');

// let masyvas = ['Antanas', 'Petras', 'Jonas', 'Karolis'];
// let kitas_masyvas = ['kitas', 'trecias', 'ketvirtas', 'penktas' ];

// function acceptArrayOfString(masyvas) {
    
//    for (let index in masyvas)  {
//       console.log(`vardas ${masyvas[index]} turi` + ' ' + masyvas[index].length);
//    }
// }
// acceptArrayOfString(masyvas);



// console.log('=========TASK 14============');

// function calculation(masyvas) {

//    for (let index in masyvas)  {
//       console.log(`Skaicius ${index}, jo kvardarata ${index **2}, padidintas is 2: ${(index **2) * 2}`);
//    }
// }
// calculation(masyvas);
// calculation(kitas_masyvas);




// console.log('=========TASK 15============');


// let student0_pazymiai = [4,6,7,8,9,9,9,9,6,5,4];
// // let vardas = 'Antanas';
// // let pavarde = 'Petraitis';


// let student = {
//    vardas: 'Antanas',
//    pavarde: 'Petraitis'
// }

// function studentAverage(grades, student) {

//    let grades_sum = 0;
  

//    for(index in grades) {
//       console.log(`Pazymiai: ${student0_pazymiai[index]}`);
//       grades_sum += student0_pazymiai[index];
//    }

//    let grades_average = grades_sum / student0_pazymiai.length;

//    console.log(`Studentoo vardas: ${student.vardas}`);
//    console.log(`Studentoo pavarde: ${student.pavarde}`);
//    console.log(`Vidurkis: ${grades_average}`);
// }

// studentAverage(student0_pazymiai, student);


// console.log('=========TASK 16============');

// let skaiciu_masyvas = [];

// function findBiggestNumberInArray(skaiciu_masyvas, masyvo_pavadinimas) {
//    let max = skaiciu_masyvas[0];

//    for(const skaicius of skaiciu_masyvas) {
//       if(sk > max) {
//          max = skaicius;
//       }
//    }

//    console.log(masyvo_pavadinimas + 'Max skaicius:' + max);
// }


// function atsitiktiniaiMasyvai(masyvas, kiekis) {
//    for(let i = 0; i < kiekis; i++) {
//       masyvas.push(Math.floor(Math.random() * 100) + 1);
//    }
// }

// console.log('=========TASK 18============');
// let sakinys = 'es non justo et, porta lobortis tortor. Nulla isl metus vel eros. Integer egestas volutpat neque id tempor. Vivamus ornare ullamcorper ipsum id lobortis. Donec sit amet luctus orci.';

// function throwSentance() {
//    console.log(sakinys);
// }

// throwSentance();


// function createRandom() {
//    let random_number = (Math.floor(Math.random() * 100) + 1) ;
//    return random_number;
// }

// console.log(`Skaicius: ${createRandom()}`);
// console.log(`Skaicius: ${createRandom()}`);
// console.log(`Skaicius: ${createRandom()}`);



// console.log('=========TASK 19============');

// let grades = [4,5,6,7,7,8,8];
// let vidurkis = 0;


// for(grade of grades) [
//    console.log(`${grade}`)
// ]


// function parseGradeAverageOfStudent(vardas, average) {

//    console.log(`Studentas ${vardas}, turi vidurki ${average}`);

// }




// console.log('=================TASK 20================');

// let skaiciai = [2, 4, 6, 5, 6];

// function maziausiasDaliklis(skaiciai) {
//    for(let index = 2; true; index++) {
//       if(skaicius % index == 0) {
//          console.log(`skaicius ${skaicius} maziausias daliklis yra ${index}`);
//          break;
//       }
//    } 

//    for(let index = 10; index < 20; index++ ) {
//       maziausiasDaliklis(index);
//    }
// }


// function sumaIsDviejuSkaiciu(skaicius1, skaicius2) {
//    return skaicius1 + skaicius2;
// }

// function sandauga(skaicius1, skaicius2) {
//    return skaicius1 * skaicius2;
// }

// function skirtumasDviejuSkaiciu(skaicius1, skaicius2) {
//    return skaicius1 - skaicius2;
// }

// function createRandomDigits() {
//    let random_number_1 = Math.floor(Math.random() * 10);
//    let random_number_2 = Math.floor(Math.random() * 10);
//    let random_number_3 = Math.floor(Math.random() * 10);
//    let random_number_4 = Math.floor(Math.random() * 10);
//    let random_number_5 = Math.floor(Math.random() * 10);
//    let random_number_6 = Math.floor(Math.random() * 10);
// }

// createRandomDigits();

// console.log('===================TASKAS=================');

// let masyvas1 = [2,4,5,6,7,8,10,10];
// let masyvas2 = [2,4,5,6,7,8,10,10];
// // let masyvas2 = [1,1,1,7,7,6,3,2];

// function sumOfNumbers(masyvas) {
//    let sum = 0;
//    for(skaicius of masyvas) {
//       sum += skaicius;
//    }
//    console.log(`SUMA: ${sum}`);
//    return sum;
// }

// let first_sum = sumOfNumbers(masyvas1);
// let second_sum = sumOfNumbers(masyvas2);

// if(first_sum > second_sum ) {
//    console.log(`PIRMA suma didesne, ji yra ${first_sum}`);
// } else if (first_sum < second_sum ) {
//    console.log(`Antra suma didesne, ji yra ${second_sum}`);
// } else {
//    console.log(`Sumos lygios, pirmoji ${first_sum}, antroji ${second_sum}`);
// }



// console.log('===================TASKAS KITAS=================');

// let zodziu_masyvas = ['Petriukas', 'Dinozauriukas', 'Begemotc', 'balandis'];


// function countLengthOfWords(masyvas) {
//    for(index in masyvas) {
//       console.log(`masyvo index'as: ${index}`);
//       for (ilgis in masyvas[index])
//       console.log(`Ilgis: ${ilgis}, length: ${ilgis.length}`);
      
//    }
// }

// countLengthOfWords(zodziu_masyvas);