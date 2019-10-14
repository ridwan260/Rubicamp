function sum() {
    let gayung = 0;
    //let jumlah;
    for (let jumlah = 0; jumlah < arguments.length; jumlah++) {
        gayung = gayung + arguments[jumlah]
    }
    console.log(gayung);
}
// sum(1,2,3)
sum(1,2,7)
sum(1,4)
sum(11)
sum(10,3,6,7,9)
