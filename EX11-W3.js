function tentukanDeretAritmatika(arr) {
  var aritmatika = true;
  var selisih = Math.abs(arr[0] - arr[1]); //menggunakan math abs karena disini mencari angka absolute, yaitu menghilangkan minus ketika angka yang dikurangi lebih kecil dari angka pengurang
  var cekSelisih = '' //var penampung selisih 
  for (var i = 1; i < arr.length - 1; i++) {
    cekSelisih = Math.abs(arr[i] - arr[i+1]) //var baru untuk membandingkan selisih
    if (selisih !== cekSelisih) { //penkondisian dimana ketika selisih antar angka pada baris tidak sama, maka akan dianggap bukan baris aritmatika, atau 'false'.
      aritmatika = false;
    }
  }
  return aritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false