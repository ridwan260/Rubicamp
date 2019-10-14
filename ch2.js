function deretKaskus(n) {
    var deret = new Array(n);
    for (var i = 1; i <= 10; i++) {
        var nilai = i * 3;
        if (nilai % 5 == 0 && nilai % 6 == 0) {
            deret[i-1] = "KASKUS";
        }
        else if (nilai % 5 == 0) {
            deret[i-1] = "KAS";
        }
        else if (nilai % 6 == 0) {
            deret[i-1] = "KUS";
            
        }else {
            deret[i-1] = nilai;
        }
    }
    return deret;
}

console.log(deretKaskus(10))