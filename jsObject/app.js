const araclar = new Object();
araclar.marka = 'BMw';
araclar.motor = 1.3;
araclar.model = 2022;

console.log(araclar);
console.log(araclar.motor);
console.log(araclar["model"]); //? square bracket notasyonu;



//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {
    this.perId = id;
    this.perAdi = ad;
    this.perMaas = maas;
    console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır

const calısan = {
    adı: "ahmet",
    soyad: "yılmaz",
    yas: 30,
    is: "developer",
    diller: ["C", "C++", "Python", "JS"],
    maas: 120000
}

console.log(calısan);
console.log(calısan.yas);
console.log(calısan.diller[1]);


calısan.konum = "Turkey";
calısan.email = "ahmet@gmail.com";
calısan["dogum"] = 1990;
console.log(calısan);

const isci = calısan;
isci.maas = 500000
console.log(isci);

const kisi = {
    ad: "Can",
    soyad: "Canan",
    dogum: 1990,
    meslek: "Developer",
    ehliyet: true,
    yasHesapla: function () {
        return new Date().getFullYear() - this.dogum;
    },
    ozet: function () {
        return `${this.ad} ${this.yasHesapla()} yasındadır`
    }
    // ozet: () => {
    //     return `${this.ad} ${this.yasHesapla()} yasındadır`
    // }
};

console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.




const kisilerObject = {
    ahmet: {
        adı: "ahmet",
        soyad: "yılmaz",
        yas: 30,
        is: "developer",
        diller: ["C", "C++", "Python", "JS"],
        maas: 120000
    },
    mehmet: {
        adı: "mehmet",
        soyad: "yılmaz",
        yas: 25,
        is: "developer",
        diller: ["C", "C++", "Python", "JS"],
        maas: 220000
    },
};





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
        name: 'Nur',
        surname: 'Ersan',
        job: 'team lead',
        age: 40,
    },
    {
        name: 'Merve',
        surname: 'Veli',
        job: 'developer',
        age: 26,
    },

    {
        name: 'Ruzgar',
        surname: 'Kuzey',
        job: 'tester',
        age: 24,
    },
];
console.log(kisiler);
console.log(kisiler[4]);

kisiler.forEach((kisi) => console.log(kisi.job));

const yaslar = kisiler.map((yas) =>(yas.age + 1));
console.log(yaslar);

const kisilerFullIsım = kisiler.map((kisi) => ({
    fullName:kisi.name.toLocaleUpperCase() + " " + kisi.surname.toLocaleUpperCase(),
    age:kisi.age + 5,
}))

console.log(kisilerFullIsım);



//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

const kucukYas = kisiler.filter((kucuk) => kucuk.age < 33)
console.log(kucukYas);

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.


//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((t, kisi) => t + kisi.age,0) / kisiler.length;
console.log(ortYas);





