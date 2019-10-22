// function prime(m) {
//     for (let x = 2; x < m; x++) {
//         if (m % x === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function indexPrime(n) {
//     let arr = []
//     for (let a = 2; arr.length < n; a++) {
//         if (prime(a)) {
//             arr.push(a) 
//         } else {
            
//         }
//     }
//     return arr.pop(n)
// }
// console.log(indexPrime(4))
// console.log(indexPrime(500))
// console.log(indexPrime(37780))


function indexPrime(param1) {
    let result = [];
    let i = 2;
    while (result.length < param1){
      if (checkPrime(i)){      
      result.push(i);
        }
      i++;
    }
    
    function checkPrime(i) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          return false;
        }
      }
      return true;
    }
    return result.pop(param1);
  }
  console.log(indexPrime(1));
  console.log(indexPrime(500));
  console.log(indexPrime(37786));

  
  
  
  
  
  
  
  
 
  
  
  
