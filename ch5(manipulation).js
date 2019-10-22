function stringManipulation(word) {
        var newArray = [];
    if (word.charAt(0) == 'a' || word.charAt(0) == 'i' || word.charAt(0) == 'u' || word.charAt(0) == 'e' || word.charAt(0) == 'o'){
        newArray = word;
    } else {
        newArray = word.slice(1) + word.charAt(0) + 'nyo';
    }
    console.log(newArray);
}



stringManipulation('ayam');
stringManipulation('bebek');
