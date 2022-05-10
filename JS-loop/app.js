// for (let i = 1 ; i <= 30; i++){
//     const randomSayi = Math.floor((Math.random()* 30) + 1)
//     console.log(randomSayi);
// }
// console.log("program bitti");

// const n = prompt("enter a number: ")
// let sum = 0
// for (let i = 1; i <= n; i++) {
//     sum += i
// }
// console.log(sum);

// const n = prompt("enter a number: ");
// let i = 0;
// while (i < n) {
//     console.log("merhaba");
//     ++i
// }
// console.log("Done");

// let i = 1;

// let not = prompt("Lütfen notunuzu giriniz: ");

// while (not > 100 || not < 0) {
//     not = prompt("Lütfen 0-100 arası değer giriniz!")
// }
// console.log(`girdiğiniz not ${not}`);




// do {
//     console.log("Merhaba", i);
//     i++;
// }while (i <= 5);
// let not;

// do {
//     not = +prompt("Lütfen 0-100 arası değer giriniz!")
// }while (not > 100 || not < 0) 
// console.log(`girdiğiniz not ${not}`);

// ! ÖDEV klavyeden q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız. Q girildiği vakit program sonlanacak.

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 0;
const rastgele = Math.floor((Math.random() * 100) + 1)
console.log(rastgele);

do{
    const tahmin = prompt("Lütfen 0-100 arasında bir sayı giriniz:");
    hak++
    if (tahmin < rastgele){
        console.log(`Dikkat ${5-hak} hakkınız kaldı`);
        console.log("Bilemediniz girdiğiniz sayıyı artırın");
    }else{
        console.log(`Dikkat ${5-hak} hakkınız kaldı`);
        if(tahmin > rastgele){
        console.log("Bilemediniz girdiğiniz sayıyı azaltın");
        }else if (tahmin == rastgele){
        console.log(`Tebrikler bildiniz 😍${hak} denemede bildiniz`);
        break
        }
    }
} while(hak < 5);














