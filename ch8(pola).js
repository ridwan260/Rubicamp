function pola(str) {
    let strArray = str.split(' ');
    let hasil = [];
    let satu = strArray[0];
    let tiga = strArray[2];
    let lima = strArray[4];
    for (let i = 0; i < 10; i++) {
        for (let a = 0; a < 10; a++) {
            if (satu.replace("#", i) * (tiga) == (lima.replace("#", a))){
                hasil.push(i, a)
            }
        }
    }
    return hasil;
}

console.log(pola('42#3 * 188 = 80#204'));
console.log(pola('8#61 * 895 = 78410#5'));
