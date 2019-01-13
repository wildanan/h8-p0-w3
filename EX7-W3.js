

function hitungJumlahKata (str){
    var kataArr = str.split(' ') //membuat str menjadi array per kata
    var hitungKata = kataArr.length //mendapatka banyaknya index dalam array
      return (hitungKata)
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
