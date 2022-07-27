alert('Bienvenido al desafío Incorporando Arrays\nEste script hallará el número menor y el número mayor ingresado')

alert('Ingrese 5 números') // Muestra al usuario 
let num = 0
let arrNum = []

for (let i = 1; i <= 5; i++) {
    num = parseInt(prompt(`Ingrese el número ${i}`))
    if (isNaN(num)) {
        alert('El valor que usted ingresó no es válido, por favor vuelva a intentarlo')
        break
    }
    arrNum.push(num)

}

if (!isNaN(num)) {
    arrNum.sort()
    alert(`El número de valor mínimo que usted ingresó es ${arrNum[0]}`)
    alert(`El número de valor máximo que usted ingresó es ${arrNum[4]}`)
}







