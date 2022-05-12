const üsAl = (taban,üs) => taban**üs;
console.log(üsAl(2,3));

//! arrow fonskiyonlarda süslü parantez kullanılırsa return kullanılmalı. aksi takdirde gerekmez.
const topla = (x,y) => x+y;
console.log(`sonuc =`,topla(5,3));

// const menu = () => `=============================`
// console.log(menu());
// console.log(`JavaScript cok kolaymıs`);
// console.log(`=========================`);


const r = prompt("yarıcapı giriniz.")
const h = prompt("yükseklik giriniz.")
const hacim = (r,h) => Math.PI *r*r *h;

console.log(`Silindirin hacmi:`, hacim(r,h).toFixed(2));
console.log(`Silindirin hacmi:`, Math.trunc(hacim(r,h)));









