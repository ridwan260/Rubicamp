function sentencesManipulation(sentence) {
    let arrKalimat = sentence.split(' ');
    let newArray = [];
    for (let i = 0; i < arrKalimat.length; i++) {
        // console.log(arrKalimat[i]);

        if (arrKalimat[i].charAt(0) == 'a' || arrKalimat[i].charAt(0) == 'i' || arrKalimat[i].charAt(0) == 'u' || arrKalimat[i].charAt(0) == 'e' || arrKalimat[i].charAt(0) == 'o') {
            newArray.push(arrKalimat[i]);
        } else {
            // newArray.push(arrKalimat[i].slice(1) + arrKalimat[i].charAt(0) + 'nyo');
        }
    }
   // Kalimat = arrKalimat.toString().replace(/,/g, "");
    console.log(Kalimat)
    console.log(newArray.join(" "));

}




sentencesManipulation("ibu pergi ke pasar bersama aku");
