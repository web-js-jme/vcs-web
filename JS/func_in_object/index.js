console.log('===============TASK=============');

// let darbuotojas = {
//     vardas: 'Julija',
//     pavarde: 'Melesina',
//     atlyginimas: 1000,
//     etatas: 1,
//     atlyginimo_pakelimas: function(procentais) {
//         naujas_atlyginimas = (this.atlyginimas * procentais) / 100;
//         console.log('Naujas atlyginimas butu: ')

//     }
// }

function striukiu_fabrikelis(tipas, gamintojas, dydis, savikaina, turimas_kiekis, reguliari_kaina) {
    return {
        tipas: tipas, 
        gamintojas: gamintojas,
        dydis: dydis,
        savikaina: savikaina,
        turimas_kiekis: turimas_kiekis,
        reguliari_kaina: 0,
        nuolaida: 0,
        galutine_kaina: function(antkainis) {
            this.kaina = this.savikaina / (antkainis / 100 + 1);
            console.log(`Galutine kaina, ${this.kaina}`);
        },

        kaina_po_nuolaidos: function(nuolaidos_procentas) {
            this.nuolaida = this.kaina / (nuolaidos_procentas / 100 +1);
            console.log(`Kaina su nuolaida ${this.nuolaida}`);
        },

        visos_prekes: function() {
            console.log('===================');
            console.log('Striukyte', 'HM', 'S', 50, 100, 50);
            console.log('Striuke', 'HM', 'XS', 50, 100, 50);
            console.log('Striuke', 'HM', 'XL', 50, 100, 50);
            console.log('Striukyte', 'POLO', 'L', 50, 100, 50);
            console.log('Striukyte', 'HM', 'M', 50, 100, 50);
        },

        duomenys: function() {
            console.log('=================');
            console.log('ziemine', 'HH', 'M', 40, 299, 60);
            console.log('ziemine', 'HH', 'M', 40, 299, 60);
            console.log('ziemine', 'HH', 'M', 40, 299, 60);
            console.log('ziemine', 'HH', 'M', 40, 299, 60);
        }
    }
}

let rubai = [
    striukiu_fabrikelis('ziemine', 'HH', 'M', 40, 299, 60),
    striukiu_fabrikelis('ziemine', 'HH', 'M', 40, 299, 60),
    striukiu_fabrikelis('ziemine', 'HH', 'M', 40, 299, 60),
    striukiu_fabrikelis('ziemine', 'HH', 'M', 40, 299, 60),
    striukiu_fabrikelis('ziemine', 'HH', 'M', 40, 299, 60),
]

for(const preke of rubai) {
    preke.duomenys();
    preke.galutine_kaina(100);
    preke.kaina_po_nuolaidos(10);   
}


let pelnas = 0;
let pelnas_nuolaida = 0;
for(const preke of rubai) {
   preke += (preke['kaina']) - preke(['savikaina']) * preke['kiekis'];
   pelnas_nuolaida += (preke[nuolaida] - preke['savikaina']) * preke['kiekis'];
}

console.log(pelnas, pelnas_nuolaida.toFixed(2));
console.log(pelnas - pelnas_nuolaida).toFixed(2);