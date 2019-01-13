/*cari mean*/

function cariMean (arr) {
    var total = 0 //var tampung untuk menampung jumlah dari keseluruhan angka pada arr
    for (var i = 0; i < arr.length; i++){
      total = total + arr[i]
    }
    var mean = total / arr.length //untuk mendapatkan emang maka jmlah keseluruhan dibagi dengan banyaknya nagka dalam arr

    return Math.round(mean) //angak desimal akan dibulatkan dengan fungsi matematika
}

console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7