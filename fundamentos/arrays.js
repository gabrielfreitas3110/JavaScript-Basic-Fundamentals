const valores = [7.3, 5.3, 6.8, 9.6]
console.log(valores[0], valores[2])
console.log(valores)
media = valores[0]+valores[1]+valores[2]+valores[3]
media = media/4
console.log('Media: '+media)
console.log('Tamanho: '+valores.length)

valores.push({id: 6}, false, null, 'teste')
console.log(valores)
valores.pop()
console.log(valores)
delete valores[0]
console.log(valores)
console.log(typeof valores)