function groupAnimals (arr){
    kebunBinatang = []
  
    for (var i = 0; i < arr.length; i++){
      var kandang = []
      for (var j = 0; j < kebunBinatang; j++){
        if (kebunBinatang[j][0][0] === arr[i][0]){
          kandang.push(arr[i])
        }
      }
       kebunBinatang.push(kandang)
    }
   return kebunBinatang
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]