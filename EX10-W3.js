function perkalianUnik(arr) {
  var newArr = []; //var untuk menampung susunan array yg baru setelah dilakukannya perkalian untik
  
  for(var i=0; i<arr.length; i++){ //i disini akan berfungsi untuk pengkondisian dengan j
    var perkalian = 1; //membuat var baru untuk menampung perkalian unik yang akan dilakukan
    for(var j =0; j<arr.length; j++){ 
      if(i !== j){ //sehingga ketika i dipanggil, angka j yg tidak sama degan i akan dikalikan. seperti test case 1, jika i = 0, yaitu angka [2], maka angka 4, 6 akan dikalikan dan dimasukkan ke var tampung 'perkalian 
        perkalian = perkalian * arr[j];
      }
      
    }
    newArr.push(perkalian); //lalu masukkan var penampung perkalian kedalam var penampung utama
  }
  
  return newArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]