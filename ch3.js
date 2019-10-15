function romawi(n) {
   
    var hasil ='';
      
    var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romawi = ["M", "CM", "D", "CD","C","XC","L","XL","X","IX","V","IV","I"];
    for (var i = 0; i < desimal.length; i++){
        //console.log('this i ',i);
        // console.log('this decimal',desimal.length);
        
        while (desimal[i] <= n ){
        hasil += romawi[i];
        n -= desimal[i];

        }
    }
    return hasil;
}   
console.log(romawi(4));
console.log(romawi(9));
console.log(romawi(13));
console.log(romawi(1453));
