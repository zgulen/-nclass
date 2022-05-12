//! parametre almamıs, birşey döndürmeyen (return) fonksiyonlara -void function- denir.
// function yazdır(){ //! function without parameters 
//     console.log(`Merhaba`);
// };
// yazdır(); //! invoking or calling function
// console.log(typeof yazdır);


//! bir parametreyi çağırma sırasında kullanmaz isek onun yerine defaul parametre atayabiliriz.
//! soyisim parametresindeki defaul değeri null yada boş string'dir.
// function selamla(isim, soyisim = "") {
//     console.log(`Merhaba ${isim} ${soyisim}`);
    
// }

// selamla("Erhan", "Yılmaz")
// selamla("Zübeyir")
// selamla("Selam")

let sonuc;
function yaşHesapla(doğumTarihi, isim) {
    sonuc = `${isim}'in yaşı ${new Date().getFullYear() - doğumTarihi}'dir`;
    return sonuc;
}
yaşHesapla(2001, "Elif")
console.log(sonuc);


function oddEven(x) {
    return x % 2 == 0 ? `Even` : `Odd`
}
console.log(oddEven(4));
console.log(4%2);


