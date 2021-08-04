let isAtivo = true

console.log('Os verdadeiros: ')
console.log(isAtivo)

isAtivo = 1
console.log((isAtivo == 1))
console.log(!!isAtivo)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos: ')

console.log(isAtivo != 1)

isAtivo = false
console.log(isAtivo)
console.log(!!isAtivo)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('--------')
console.log(!!('' || null || 0 || ''))

let nome  = ''
nome = 'Lucas'
console.log(nome || 'Desconhecido')

