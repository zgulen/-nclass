// const araclar = new Object();
// araclar.marka = 'BMw';
// araclar.motor = 1.3;
// araclar.model = 2022;


// const{marka, model} = araclar
// console.log(marka, model);

//* EXAMPLE: NESTED
const cars = {
    car1: {
        name: "BMW",
        model: 1990,
        engine: 1.6,
    },
    car2: {
        name: "Mercedes",
        model: 2022,
        engine: 2.0,
    },
};

const { car1, car2 } = cars
console.log(car1, car2);

const { name: c1Name, model: c1Model } = car1
console.log(c1Name, c1Model);

const { name: car2Name, model: car2Model } = car2
console.log(car2Name, car2Model);



const kisiler = [
    {
        name: 'Ahmet',
        surname: 'Can',
        job: 'developer',
        age: 30,
    },
    {
        name: 'Mehmet',
        surname: 'Baki',
        job: 'tester',
        age: 35,
    },
    {
        name: 'Ruzgar',
        surname: 'Kuzey',
        job: 'tester',
        age: 24,
    },
];

kisiler.forEach((kisi) => {
    console.log("NAME:", kisi.name);
    console.log("NAME:", kisi.surname);
    console.log("NAME:", kisi.age);
    console.log("NAME:", kisi.job);
    console.log("********************");
})

kisiler.forEach((kisi) => {
    const { name, job, surname, age } = kisi;
    console.log("NAME:", name);
    console.log("NAME:", surname);
    console.log("NAME:", age);
    console.log("NAME:", job);
    console.log("********************");
})

//* function
function getInfo() {
    return {
        id: 101,
        name: "Apple",
        price: 20000,
    };
}
const { id, name, price } = getInfo();
console.log(id, price);

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

const [person1, person2, ,person4] = names;
console.log(person1, person2, person4);


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

/* REST: (Arrays) */
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];

const [vec1, vec2, ...restVehicles] = vehicles

console.log(vec1,vec2,restVehicles);



const hepsinitopla = (...sayilar) => {
    let toplam = 0;
    sayilar.forEach((sayi) => (toplam += sayi))
    return toplam;
}
console.log(hepsinitopla(1,2,3,4,5,6))









