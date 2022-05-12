//! fonksiyon expression yöntemiyle bir fonk tanımlandığunda önce tanımlama gerekir sonrasında fonksiyon çağrılmalıdır
const oddEven = function (x) {
    return x % 2 == 0 ? `Even` : `Odd`
}
console.log(oddEven(4));

const buyukBul = function(x,y,z = -Number.MAX_VALUE){
    let sonuc;
    if (x >= y && x >= z){
        return x;
    }else if (y>=x && y>=z){
        return sonuc = y;
    }else if (z >=x && z>=x){
        return sonuc = z;
    }else {
        sonuc = x;
    }
    return sonuc;
}
console.log(`En büyük sayı:`, buyukBul(3,3,2));






