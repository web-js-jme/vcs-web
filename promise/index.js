
/**
 * 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
    turėtų vykdyti callback funkciją po 2s. 
 */

    // console.log('1');
    // console.log('3');

    // setTimeout(() => {
    //     console.log('2');
    // }, 2000);

    const afterTwoSeocond = (callback) => {
        setTimeout(() => {
            callback()
        }, 2000);
    }

    afterTwoSeocond(() => {
        console.log('spausdinu po 2sec.');
    })

/**
 * 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
duomenimis.
 */
const getUser = () => {
    return new  Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                resolve(request.responseText);
            } else if (request.readyState === 4){
                reject('uzklausa negrazino 200 statuso');
            }
        });
        request.open('https://jsonplaceholder.typicode.com/users');
        request.send();
    })
}

getUser().then(data => {
    console.log('2, uzd duomenys', data);
}).catch(err => {
    console.log('2, uzd duomenys', err);
});


/**
 * Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
pirmojiFunkcija(masyvas, callbackFunkcija)
 */

const pirmojiFunkcija = (array, callback) => {
    array.forEach(element => {
       callback(element); 
    })
}

const numbersArray = [2, 6, 10, 20, 54, 107];

pirmojiFunkcija(numbersArray, (element) => {
    if(element % 2 === 0) {
        console.log(element, 'dalomas is dvieju');
    } else {
        console.log(element, 'nedalomas is dvieju');
    }
});

/**
 * 
 * 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
grąžinti atsiųsto "string" ilgį.
- susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
- funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo

nariui iškviest funkciją koksIlgis(string)
 */



const patikrinkZodzioIlgi = (array, callback) => {
    array.forEach(element => {
        callback(element);
    });
}

const koksIlgis = (string) => {
    console.log(string, string.lenght);
}
    
const stringsArray = ['vienas', 'du', 'trys', 'zebras', 'masina'];
patikrinkZodzioIlgi(stringsArray, koksIlgis);


/**
 * 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
atrinktos objekto properties, tarkim tik markė ir modelis)
 */


const modifikuotasObjektas = [array, callback] => {
    const newArray = [];
  array.forEach(element => {
    // callback(element);
    newArray = [];
  });

  return newArray;
}

const objectsArray = [
    {
        rida: '10000',
        marke: 'vv',
        modelis: 'a1',
        gamybosMetai: 1991,
        kaina: 20000
    },

    {
        rida: '20000',
        marke: 'bmv',
        modelis: 'a3',
        gamybosMetai: 1991,
        kaina: 20000
    }
]

modifikuotasObjektas(objectsArray, (element) => {
   const naujasObjektas = {
        rida: element.rida,
        kaina: element.kaina
    }

    console.log(naujasObjektas);
    return naujasObjektas;
})

/**
 * 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.
 */

const checkIfUserLoggedin = (isUserLogedIn) => {
    return new Promise((resolve, reject) => {
        if(isUserLogedIn) {
            resolve('prisijunges');
        } else {
            reject('nera prisijunges');
        }
    });
}

checkIfUserLoggedin(true).then(result => {
    console.log(result);
}).catch(error => { console.error (error) });

checkIfUserLoggedin(false).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
})



/**
 * 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
nei 18". Iškvieskite šią funkciją naudojantis then ir catch.
 */

const arGaliLaikytiEgzamina = async (age) => {
    if(age && typeof age === 'number') {
        if (age > 18) {
            return 'varottojas gali laikyt'
        } else {
            throw new Error('turi buti daugiau nei 18');
        } 
    
    } else {
            throw new Error ('rgumentas blogas')
        }
    }
}

arGaliLaikytiEgzamina(19).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})