
function angkaPalindrome (num){
  
  var check = false

  while (check === false){
    var numStr = String(num) //bikin num jadi str untuk medapat index
    var tamp = ''
 
    for (var i = numStr.length-1 ; i >= 0; i--){
      tamp += numStr[i] //looping for balik kata
    }
    tamp = Number(tamp) //baikkan str menjadi num lagi utuk bisa diaplikasikan dalam perhitungan

    if (num !== tamp){ //pengkondisian
      num++
    } else if (num < 9){
      return num + 1
    } else {
      return num 
    }
  }
}
//TEST CASE
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001