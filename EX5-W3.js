
function isPalindrome (str){
  var cekPalindrome = ''
  for (var i = str.length-1; i >= 0; i--){
    cekPalindrome += str[i] //membalik string
  }
  if (cekPalindrome != str){ //kondisi. jika string tidak sama dengan string yg bibalik. maka false
    return false
  } else {
    return true
  }
}

//test case
console.log(isPalindrome('katak')); // true
console.log(isPalindrome('blanket')); // false
console.log(isPalindrome('civic')); // true
console.log(isPalindrome('kasur rusak')); // true
console.log(isPalindrome('mister')); // false