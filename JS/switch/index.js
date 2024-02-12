// let pradzia = 1;
// let pabaiga = 100;
// let skaicius = 2;

// if (skaicius > 0 && skaicius <= 100) {
//     console.log('Skaiciukas patenka tarp reziu [1-100]');
// }

// if (skaicius == 3 || skaicius > 100) {
//     console.log('Skaiciukas lygu 3 arba yra didesnis nei 100');
// }

// if (skaicius >= pradzia && skaicius <= pabaiga) {
//     console.log('skaicius patenka i nurodytus rezius');
// } else {
//     console.log('Sskaicius nepatenka i nurodytus rezius');
// }


console.log('================TASK 12==================================');
let first_number = 8;
let second_number = 5;
let third_number = 7;

if (first_number > second_number && first_number > third_number) {
    console.log('First number is highest one');
} else if (second_number > first_number  && second_number > third_number) {
    console.log('Second number is highest');
} else if (third_number > first_number && third_number > second_number) {
    console.log('Third number is highest');
}

console.log('================TASK 13==================================');

if (first_number < second_number && first_number < third_number) {
    console.log('First number is low');
} else if (second_number < first_number  && second_number < third_number) {
    console.log('Second number is low');
} else if (third_number < first_number && third_number < second_number) {
    console.log('Third number is low');
}

console.log('================TASK 14==================================');
let result_of_first_student = 7;
let result_of_second_student = 9;
let result_of_third_student = 4;


let average = (result_of_first_student + result_of_second_student + result_of_third_student) / 3;
console.log(`AVERAGE is: ${average}`);

if(average >= 8 && average <= 10) {
    console.log('Average fits into range [8-10]');
} else if (average >= 5 && average <= 8) {
    console.log('Average fits into range [5-8]');
} else if (average < 5) {
    console.log('Average is lower than 5');
} else {
    console.log('Failed to count average');
}

console.log('================TASK 15==================================');
let number1 = 4;
let number2 = 7;

if (number1 > number2 || number1 === 0) {
    console.log('Number 1 bigger than NUmber 2, or equals to zero');
}

if (number2 > number1 || number2 === 5) {
    console.log('Number 2 bigger than NUmber 1, OR equals to 5');
}

if (number1 > number2 && number1 === 20) {
    console.log('Number 1 bigger than NUmber 2, AND number 1 equals 20');
}

if (number2 > number1 && number2 < 100) {
    console.log('Number 2 is bigger than number 1, AND number 2 is lower than 100');
}