// let mano_skaicius = 6;

// switch (mano_skaicius) {
//     case 1: console.log('Laimejo vandens');
//         break;
//     case 2: console.log('Laimejo limonado');
//         break;
//     case 3: console.log('Laimejo arbata');
//         break;
//     case 4: console.log('Laimejo kava');
//         break;
//     default:
//         console.log('tikriausiai vanduo baigesi');
//         break;
// }



// console.log('=============================');
// let skaicius = 1;
// let skaicius2 = 2;
// let skaicius3 = 3;

// switch (skaicius) {
//     case 1: console.log(skaicius + skaicius2 + skaicius3); 
//         break;
//     case 2: console.log(skaicius2 * skaicius3); 
//         break;
//     case 3: console.log(skaicius ** 2); 
//         break;
//     default:
//         console.log('Damn, something wrong');
//         break;
// }


console.log('=============================');

let error_code_500 = 500;
let error_code_404 = 404;
let error_code_400 = 400;
let error_code_200 = 200;

let error_code = error_code_400;

switch(error_code) {
    case error_code_200: console.log('All good, move on');
        break;
    case error_code_400: console.log('hmmm, bad request. Ask developer');
        break;
    case error_code_404: console.log('Not found. looks like url is not in use');
        break;
    case error_code_500: console.log('Server is down. Take a rest');
        break;
    default: 
        console.log('Unexpected error appeared');
        break;
}