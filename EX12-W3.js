function tentukanDeretGeometri(arr) {
  var gap = arr[1] / arr[0];
  var geometri = true;
  var cekGap = 0 // membuatvar penampung geometri untuk menentukan kondisi
  for (var i = 1; i < arr.length-1; i++) {
    cekGap = arr[i+1]/arr[i]
    if (gap !== cekGap) { //pengkondisian untuk mementukan apakah bilangan ini merupakan geometri atau bukan. karena geometri adalah barisan angka yang angka pengalinya sama  
      geometri = false;
    }
  }
  return geometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false