
function pasanganTerbesar(num) {
  var numStr = String(num); //merubah angka dalam 'num' menjadi sting untuk mendapatkan indexnya
  var findBig = Number(numStr[0]+numStr[1]); //pasangan pertama dari barisan angka
  var cekBig = 0 //var tampung untuk cek pasangan angka seanjutnya
  for (var i = 1; i < numStr.length-1; i++) {
    cekBig = Number(numStr[i]+numStr[i+1]) //untuk mengecek pasangan angka selanjutnya
    if (findBig < cekBig) { //kondisi: ketika findBig lebih kecil daripada cekBig
      findBig = cekBig //findBig akan berpindah ke pasangan angka selanjutnya
    } else {
      findBig //ketika anga findBig lebih besar dari angka cekBig, maka akan di tampikan angka tersebut
    }
  }
  return findBig;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99