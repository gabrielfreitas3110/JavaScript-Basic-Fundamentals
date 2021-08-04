const escola = "Ud3my"


console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charAt(8))

console.log(escola.charCodeAt(0)) //Valor na tabela ASCII

console.log(escola.indexOf('3'))

console.log(escola.substring(2))
console.log(escola.substring(0,2))

console.log('Escola: '.concat(escola).concat("!"))
console.log('Escola: '+ escola + "!" )

console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'g')) //Substitui todos os digitos por g
console.log(escola.replace(/\w/g,'z'))//Subistitui tudo por z

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))
