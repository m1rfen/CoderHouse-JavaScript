alert('Bienvenido al desafío Incorporando Arrays\nEste script hallará el número menor y el número mayor ingresado') // Muestra un cartel al usuario dandole la bienvenida

alert('Ingrese 5 números') // Aclara en un cartel que tiene que hacer el usuario con la aplicación
let num = 0 // Inicializa la variable num, que luego se usará para guardar el ingreso del usuario
let arrNum = [] // Se crea el array que luego se utilizará para guardar los números

// Se crea el bucle para pedir 5 veces el ingreso del numero
for (let i = 1; i <= 5; i++) {
    num = parseInt(prompt(`Ingrese el número ${i}`)) // Pide al usuario en promopt que ingrese números, y a su vez mostrandole cuantos lleva ingresados ya
    // Se crea una condicional para validar el ingreso del numero por el usuario
    if (isNaN(num)) {
        alert('El valor que usted ingresó no es válido, por favor vuelva a intentarlo')
        break
    }
    arrNum.push(num) // Se envía el número ingresado por el usuario al array

}

// Valida que solo se muestren los resultados en el caso que el número ingresado haya sido un valor correcto
if (!isNaN(num)) {
    arrNum.sort() // Ordena los valores dentro del array
    alert(`El número de valor mínimo que usted ingresó es ${arrNum[0]}`) // Muestra el valor mínimo del array
    alert(`El número de valor máximo que usted ingresó es ${arrNum[4]}`) // Muestra el valor máximo del array
}







