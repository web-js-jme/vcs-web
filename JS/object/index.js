console.log('TEMA OBJEKTAI');


// let student = {
//     varda: 'Studentukas',
//     pavarde: 'Pavarde',
//     amzius: 18,
//     studiju_programa: 'JS vakariniai',
//     kreditu_skaicius: 1,
//     pazymys: 7,
//     ugis: 180,
//     kursas: 1,
//     mokykla: 'Vilniaus'
// }
// console.log(`${student.varda}, ${student.pavarde} ir jam yra ${student.amzius}, kuri mokosi ${student.studiju_programa} ir gavo jau ${student.kreditu_skaicius} kredita ir pazymi ${student.pazymys}. ${student.varda} ${student.ugis}, mokosi ${student.mokykla}`);

// console.log(`${student.varda}`);
// console.log(`${student.ugis}`);
// console.log(`${student.mokykla}`);

// let filmas = {
//     pavadinimas: 'Muza',
//     rezisierius: 'Agnė Marcinkevičiūtė',
//     uzdirbo_ponigu: 120988,
//     biudzetas: 20000,
//     zanras: 'Dokumentika',
//     trukme: 1.28,
//     isleidimo_metai: new Date('2022').getFullYear(),
//     aktoriai: [
//         {
//             vardas: 'Morgan',
//             pavarde: 'Freeman'
//         },

//         {
//             vardas: 'Samuel',
//             pavarde: 'L.Jackson'
//         },

//         {
//             vardas: 'Bruce',
//             pavarde: 'Willis'
//         }
//     ],
//     // aktoriai: ['Vardas pavarde',  'Vardas pavarde', 'Vardas pavarde'], //masyvai 

// }

// let todays_date = new Date(Date.now()).getFullYear();
// let metai = todays_date - filmas.isleidimo_metai;
// let pelnas = filmas.uzdirbo_ponigu - filmas.biudzetas;

// console.log(`AKtoriu skaicius: ${filmas.aktoriai.length}`);
// console.log(`Filmui yra : ${metai}`);
// console.log(`Uzdirbo : ${pelnas}`);
// console.log(filmas);







// let knyga1 = {
//     pavadinimas: "knygos pavadinimas",
//     autorius: "Autoriaus pavadinimas ",
//     zanras: 'zanro pavadinimas',
//     kaina: 11,
//     psl_skaicius: 122,
//     skyriu_sarasas: ['Skyrius1', 'Skyrius2', 'Skyrius3'],
//     isleidimoo_metai: 2011,
//     galima_rasti: true,

// }

// let knyga2 = {
//     pavadinimas: "knygos pavadinimas 2",
//     autorius: "Autoriaus pavadinimas 2",
//     zanras: 'zanro pavadinimas',
//     kaina: 11,
//     psl_skaicius: 122,
//     skyriu_sarasas: ['Skyrius1', 'Skyrius2', 'Skyrius3'],
//     isleidimoo_metai: 2011,
//     galima_rasti: true,
// }





// let preke = {
//     pavadinimas: 'Preke 1',
//     kaina: 22,
//     savikaina: 11,
//     koodas: 234567567,
//     tturimas_kiekis_sandelyje: 87,
//     siuntimo_matmenys: [
        
//         {
//             x: 20,
//             y: 25,
//             z: 30
//         }
//     ]
// }

// let preke2= {
//     pavadinimas: 'Preke 2',
//     kaina: 40,
//     savikaina: 18,
//     koodas: 222222222,
//     tturimas_kiekis_sandelyje: 1,
//     siuntimo_matmenys: [
        
//         {
//             x: 30,
//             y: 35,
//             z: 30
//         }
//     ]
// }

// let preke3= {
//     pavadinimas: 'Preke 3',
//     kaina: 32,
//     savikaina: 13,
//     koodas: 333333333,
//     tturimas_kiekis_sandelyje: 23,
//     siuntimo_matmenys: [
        
//         {
//             x: 40,
//             y: 55,
//             z: 40
//         }
//     ]
// }

// let prekes = [preke, preke2, preke3];
// console.log(`Pirmos prekes kaina: ${preke.kaina}, antros prekes kaina: ${preke2.kaina}, trecios prekes kaina ${preke3.kaina}`);

// let index =0;


console.log('=============================');

// let auto = {
//     marke: 'Mazda',
//     modelis: 'C3',
//     rida: 120000,
//     gamybos_metai: 2002,
//     spalva: 'black',
//     darbinis_turi: 171,
//     dauzta: true,
//     parduodama: true,
// }
// console.log(`PAGAMINTA: ${auto.gamybos_metai}`);
// console.log(`SIANDIEN: ${new Date(Date.now()).getFullYear()}`);
// console.log(`SIANDIEN: ${new Date(Date.now())}`);
// console.log(`AUTO RIDA: ${auto.rida}`);

// let kiek_auto_metu = new Date(Date.now()).getFullYear() - auto.gamybos_metai;
// let auto_nuvaziavo = auto.rida / kiek_auto_metu;

// console.log(`Autommobiliui metu: ${kiek_auto_metu}`);
// console.log(`Nuvaziavo: ${auto_nuvaziavo} `)


// let cekis = {
//     pienas: 2,
//     duona: 3.20,
//     sviestas: false,
//     saldaniai: 9.30,
//     mineralinis: 1
// }

// let cekio_suma = cekis.pienas + cekis.duona + cekis.sviestas + cekis.saldaniai + cekis.mineralinis;
// console.log(`BENDRRA SUMA: ${cekio_suma}`);

// //jei sviesto nera, neimt ir duonos 
// if(cekis.sviestas) {
//     let kaina_be_duonos = cekis.pienas + cekis.sviestas + cekis.saldaniai + cekis.mineralinis;
//     console.log('Kaina be duonos:' + kaina_be_duonos);
// }

// //jei cekio suma virsija 15eur, duooda 1a lipduka, jei > 20 === 2 lipdukus
// if(cekio_suma <= 15 ) {
//     console.log('Gausi viena lipduka');
// } else if (cekio_suma > 15) {
//     console.log('Gausi 2 liipdukus');
// } else {
//     console.log('nera lipduku');
// }




let knygynas = {
    pavadinimas: 'VAGA',
    adresas: 'Mindaugo g. 14',
    plotas: 120,
    knygu_kiekis: 46,
    atidaryta: true,

}
