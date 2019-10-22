function weirdMultiply(sentence) {
    let strAngka = sentence.toString();
    let jumlah = 1;
    if (strAngka.length == 1) {
        jumlah = parseInt(strAngka);
        return jumlah;

    }
    else {
        for (let i = 0; i < strAngka.length; i++) {
            jumlah *= parseInt(strAngka.charAt(i));
        }
        return weirdMultiply(jumlah);
        console.log(jumlah)
    }
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
