// let a = 6;
// let b = 4;

// console.log(a > b);
// console.log(a < b);
// console.log();

// console.log(a == b);
// console.log(a != b);
// console.log();


// console.log(a * 2 > b);
// console.log(a + 5 > b * 1.5);
// console.log();


// console.log(a * 2 > 10);
// console.log(a * 2 >= 10);


// let skaicius_pirmas = 8;
// let skaicius_antras = 6;
// let skaicius_trecias = 3;

// if (skaicius_pirmas === skaicius_antras) {
//     console.log('Oho, lygu');
// }

// let result = skaicius_antras === skaicius_trecias ? console.log('Lygu, labai lygu') : console.log('Nelygu');

// if (skaicius_pirmas > skaicius_antras) {
//     console.log('Pirmas skaicius didesnis uz antra');
// }

// if (skaicius_antras > (2 * skaicius_trecias)) {
//     console.log('Mhm, antras didesnis');
// }

// if (skaicius_pirmas % 2 == 0) {
//     console.log('Pasidalino pirmas skaicius');
// }

// let result2 = skaicius_antras % 2 === 0 ? console.log('yep, dalinasi') : console.log('niekaip, nepavyko padalinti');

// if (skaicius_trecias > 0) {
//     console.log('yep, didesnis uz nuli');
// } 

// if (skaicius_pirmas < 0) {
//     console.log('skaicius mazesnis uz nuli');
// }

// if (skaicius_antras % 4 == 0) {
//     console.log('dalinasi is 4');
// }

// if (skaicius_trecias % 8 == 0) {
//     console.log('dalinasi is 8');
// }

// console.log('===============================================');

// //TASK
// let amzius = 20;

// if (amzius >= 18) {
//     console.log('Jus galite balsuoti');
// }

// console.log('===============================================');

// //TASK
// let tado_paz = 8;
// let antano_paz = 10;
// let petrutes_paz = 5;

// let vidurkis = (antano_paz + tado_paz + petrutes_paz) / 3;
// console.log(`Vidurkis yra: ${vidurkis}`);


// if (vidurkis >= 5) {
//     console.log('Vidurkis teigiamas');
// } else {
//     console.log('nope, nepasiseke');
// }

// console.log('===============================================');

//TASK
// let kintamasis = 15;

// if (kintamasis % 5 == 0) {

//     console.log(`${kintamasis}` * 1);
//     console.log(`${kintamasis}` * 2);
//     console.log(`${kintamasis}` * 3);
//     console.log(`${kintamasis}` * 4);
//     console.log(`${kintamasis}` * 5);
// } 

// if (kintamasis % 2 == 0) {
//     let kvadratas = kintamasis * 2;
//     let padalintas = kintamasis / 2;

//     console.log(`KINTAMASIS: ${kintamasis}`);
//     console.log(`JO KVADRATAS: ${kvadratas}`);
//     console.log(`PADALINTAS IS 2: ${padalintas}`);

// } 

// if (kintamasis % 7 != 0) {
//     let kitas_kintamasis = 5;

//     let sum =  kintamasis + kitas_kintamasis;
//     let skitumas = kintamasis - kitas_kintamasis;
//     let sandauga = kintamasis * kitas_kintamasis;
//     let dalm = kintamasis / kitas_kintamasis;

//     console.log(`SUMA: ${sum}, SKIRTUMAS: ${skitumas}, SANDAUGA: ${sandauga}, DALMU: ${dalm}`);
// }




// let kintamasis  = 9;

// if (kintamasis === 10) {
//     console.log('Puiku');
// } else if (kintamasis >= 9) {
//     console.log('Labai gerai');
// } else if (kintamasis >= 7) {
//     console.log('Gerai');
// } else if (kintamasis >= 5) {
//     console.log('Patenkinamai');
// } else if (kintamasis < 5) {
//     console.log('Neislaikyta');
// }





let kintamasis = 8;

if(kintamasis %2 == 0 ) {
    console.log('Yep');
} else {
    console.log('Nope');
}


if(kintamasis % 7 == 0 ) {
    console.log('pasidalino');
} else {
    console.log('nepasidalino');
}


let path = './folder/file/textfille.js';

if (path.endsWith('textfille.js!')) {
    console.log('Found a file');
} else {
    console.log('Not found');
}





let skaiciukas = 55;

if (skaiciukas % 2 == 0) {
    console.log('lyginis');
} else if (skaiciukas / 5 == 0) {
    console.log('dalinasi is 5');
} else if (skaiciukas === 3) {
    console.log('Lygu 3');
} else {
    console.log('Something went wrong');
}



let pirrmas = 7;
let antras = 6;
let trecias = 2;


if (pirrmas === antras) {
    console.log('pirmas ir antras lygus');
} else if (pirrmas === trecias) {
    console.log('pirmas ir trecias lygus');
} else if (trecias > pirrmas) {
    console.log('trecias didesnis');
} else if (antras === trecias * 2) {
    console.log('');
} else if (pirrmas / 3 == 0) {
    console.log('dalinasi is 3');
} else {
    console.log('Something went wrong');
}