/*Function balik String */

var strBalik = ''
function balikString (str) {
    for (var i = str.length - 1; i >= 0 ; i--){
      strBalik += str[i]
    }  
    return strBalik
}

console.log(balikString('Hello World!'))