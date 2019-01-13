function mengelompokkanAngka(arr) {
    var arr_result = [[],[],[]];
    //variable kandang untuk menampung angka-angka yang akan dikelompokkan
    for (var i = 0; i < arr.length; i++) {
      //loopig angka-angka pd array 
      if (arr[i] % 3 === 0) {
        arr_result[2].push(arr[i]);
        continue;
        //untuk kondisi jika angka merupakan kelipatan dari 3
      }
      if (arr[i] % 2 !== 0) {
        arr_result[1].push(arr[i]);
        continue;
        //untuk kondisi jika angka merupakan bilangan ganjil
      }
      if (arr[i] % 2 === 0) {
        arr_result[0].push(arr[i]);
        continue;
        //untuk kondisi ketika angka merupakan bilangan genap
      }
    }
    return arr_result;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]