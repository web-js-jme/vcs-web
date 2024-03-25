console.log('======================1=====================');
/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log('======================2=====================');
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

const Currency = {
    EURtoUSD: 'EUR',
    USDtoEUR: 'USD'
}

const randomNumber = Math.floor(Math.random() * 1000) + 1;

function convertCurrency(currency, randomNumber) {
let amount;
   const interestRateEUR = 1.08;
   const interestRateUSD = 0.92;

   switch(currency) {
    case Currency.EURtoUSD: 
    amount = randomNumber * interestRateEUR; 
    break;
    case Currency.USDtoEUR: 
    amount = randomNumber * interestRateUSD; 
    break;
    default: console.log('Failed to identify currency');
 }
 return amount;
}

let convertedValueFromEurToUsd = convertCurrency(Currency.EURtoUSD, randomNumber);
console.log(`CONVERTED VALUE from EUR to USD: ${convertedValueFromEurToUsd}`);

let convertedValueFromUsdToEur = convertCurrency(Currency.USDtoEUR, randomNumber);
console.log(`CONVERTED VALUE from USD to EUR: ${convertedValueFromUsdToEur}`);


console.log('======================3=====================');
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69

Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function calculateBmi(height, weight) {

    let bmi = weight / (height * 2);
    let result;

    console.log('BMI:' + bmi);

    if (bmi > 25) {
        return 'Virsvoris';
    } else if (bmi >= 18 && bmi < 25) {
        return 'Normalu';
    } else if (bmi < 18) {
        return 'Per mažas svoris';
    } else {
        console.log('something went wrong');
    }
    return result;
}

let bmiResultVirsvoris = calculateBmi(1.75, 88);
console.log(`CALCULATED BMI virsvoris: ${bmiResultVirsvoris}`);

let bmiResultNormalus = calculateBmi(1.80, 88);
console.log(`CALCULATED BMI normalus: ${bmiResultNormalus}`);

let bmiResultPerMazas = calculateBmi(1.90, 50);
console.log(`CALCULATED BMI per mazas: ${bmiResultPerMazas}`);

console.log('======================4=====================');
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/ 
// skirtumas nuo siandien iki gimimo


function calculateUserAge(birthYear) {
    const currentYear = new Date().getFullYear();
    let age =  currentYear - birthYear;

    const secondsInHour = 60 * 60;

    const ageInSeconds = age * 365 * 24 * secondsInHour; // 24h
    const ageInMinutes = ageInSeconds / 60; //60sek in minute
    const ageInHours = ageInSeconds / secondsInHour; // 

    let info = {
        seconds: ageInSeconds,
        minutes: ageInMinutes,
        hours: ageInHours 
    }

    return info;   
}

let userInfo = calculateUserAge(1900);
console.log(`USER info: in seconds ${userInfo.seconds}, in minutes: ${userInfo.minutes}, in hours: ${userInfo.hours}`);


console.log('======================5=====================');
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

const Type = {
    Celsius: 'C',
    Farenheito:'F'
}

function temperatureConversion(type, temperature) {
    let convertedTemperature;

    if(type === Type.Celsius) {
        console.log('inside celsius')
        convertedTemperature = (temperature * 9/5) + 32;
        return convertedTemperature.toFixed(2) + 'C';

    } else if (type === Type.Farenheito) {
        convertedTemperature = (temperature - 32) * 5/9;
        return convertedTemperature.toFixed(2) + 'F';
    } else {
        return 'Something wrong with entered value';
    }
}

let celsiusTemperature = temperatureConversion(Type.Celsius, 30);
console.log(`Converted from Celsius to Forenheit, value: ${celsiusTemperature}`);

let farenheitTemperature = temperatureConversion(Type.Farenheito, 86.80);
console.log(`Converted from Forenheit to Celsius, value ${farenheitTemperature}`);


console.log('======================6=====================');
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
const newArray = [];

arrayOfNumbers.forEach(element => {
    if(element !== 10) {
        newArray.push(element + '-');
    } else {
        newArray.push(element);
    }
})

console.log(newArray);



console.log('======================7=====================');
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

const numberOfRows = 5;

for (let row = 1; row <= numberOfRows; row++) {
    let printInRow = '';
    for (let starCount = 1; starCount <= row; starCount++) {
        printInRow += '*';
    }
    console.log(printInRow);

}


console.log('======================8=====================');
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

function canculateDayTillChristmas() {
    let today = new Date();
    let christmasYear = today.getFullYear();
    
    if (today.getMonth() == 11 && today.getDate() > 25) {
      christmasYear = christmasYear + 1;
    }
    
    let christmasDate = new Date(christmasYear, 11, 25);
    let dayMilliseconds = 1000 * 60 * 60 * 24;
    
    let remainingDays = Math.ceil(
      (christmasDate.getTime() - today.getTime()) /
       (dayMilliseconds)
    );
    return remainingDays;
}

const days = canculateDayTillChristmas();
console.log('Left days:' + days);


console.log('======================9=====================');
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

const arrayOfNames = ['Tomas', 'Dainius', 'Paulius', 'Jonas' ];
const newArrayOfNames = [];
const newArayWithPluseSign = [];

arrayOfNames.forEach(username => {
    newArrayOfNames.push(username);
})


arrayOfNames.forEach((username, index) => {
    if(username === 'Jonas') {
        newArayWithPluseSign.push(username);
    } else {
        newArayWithPluseSign.push(username + '+');
    }
})
console.log('new array of names' + ' ' + newArrayOfNames);
console.log('new array of names' + ' ' + newArayWithPluseSign);


console.log('======================9=====================');
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

let result = Math.random().toString(36).substring(1,12);
let randomIndex = Math.floor(Math.random() * result.length);
let containsLowerCase = /[a-z]/.test(result);
let constainsUpperCase = /[A-Z]/.test(result);
const newPassword = '';

if(!constainsUpperCase) {
    result.charAt(randomIndex);
}

if(!containsLowerCase) {
    esult.charAt(randomIndex);
}

console.log(result);
console.log(constainsUpperCase);
console.log(containsLowerCase);

