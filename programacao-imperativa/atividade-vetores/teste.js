/*let rapaz = [1, 2 , 3 , 4, 5, 6]


rapaz.forEach((Element) => {
    console.log(Element)
})

for(i = 0; i < rapaz.length; i++) {
    console.log(rapaz[i])
}*/

var notas = [9.6, 6.2, 7.8, 3.8, 5.0, 10.0, 10.0]
var media = 0.0


for(var i = 0; i < notas.length; i++) {
    media += notas[i]
}

media /= notas.length
console.log(media.toFixed(2))