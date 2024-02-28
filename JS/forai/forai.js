// for(let x = 0; true; x++) {
//     if(x  <= 100) {
//         console.log('Pasiekem');
//         continue;
//     }

//    else if(x > 100 && x < 200) {
//         console.log('Pasiekem', x);
//         continue;
//     }
//     console.log('Pasiekm', x);
//     break;
// }


// console.log('============1==============');
// for(let i = 0; i <= 10; i++) {
//     console.log(`${i}`);
// }

// console.log('============2==============');
// for(let i = 0; i <= 15; i += 2) {
//     console.log(`${i}`);
// }

// console.log('============3==============');
// for(let i = 1; i <= 20; i += 3) {
//     console.log(`[${i}]`);
// }

// console.log('============4==============');
// for(let i= 1; i <= 20; i++) {
//     if(i % 4 == 0 ) {
//         console.log(`Mano i = ${i}, jis dalinasi is 4`);
//         i++;
//     }
//     console.log(`${i}`);
// }

// console.log('============5==============');
// let pradzia = 5;
// let pabaiga = 22;

// if (pabaiga > pradzia) {
//     for(let i = pradzia; i <= pabaiga; i++) {
//         console.log(`Skaicius yra: ${i}, jo kvadratas yra ${i ** 2}`);
//     }
// }

// console.log('============6==============');
// if (pabaiga >= pradzia) {
//     for(let i = pradzia; i <= pabaiga; i++) {
//         if (i % 2 !=0 || i % 8 == 0 ) {
//             console.log(`Skaicius yra ${i}, ir jis yra nelyginis arba dalinasi is 8`);
//         } 
//     }
// }

// console.log('============7==============');

// let skaicius1 = 6;
// let skaicius2 = 10;
// let result = 0;

// for(let i = 0; i < skaicius2; i++ ) {
//     result += skaicius1;
// }

// console.log(`RESULT: ${result}`);


// let sum = 0;

// for (i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(`SUM: ${sum}`);



// for(i = 20; i <= 50; i+=2 ) {
//     sum = sum + 1;
// }
// console.log(`SUM: ${sum}`);

// for(i = 30; i <= 650; i++ ) {
//    if(i % 2 != 0) {
//     sum = sum +i;
//    }
// }
// console.log(`SUM: ${sum}`);

// for(i = 999; i > 0; m-- ) {
//     if(i % 3 == 0 || i % 5 == 0) {
//      sum = sum +i;
//     }
//  }
//  console.log(`SUM: ${sum}`);
 
 


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 &&  i % 5 == 0) {
//         console.log('FIZZBUzz')
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('BUZZ');
//     } else {
//         console.log(`${i}`);
//     }
// }





let skaiciukas = 0;
 
while(skaiciukas < 5) {
    console.log(skaiciukas);
    skaiciukas += 1;
}