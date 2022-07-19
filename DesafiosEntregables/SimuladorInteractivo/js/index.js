/**
 * 
 * @returns 
 */
function userAgeAverage() { // Creación de la función que utilizaremos

    let i = 0 // Inicializacoón del contador
    let userAge = 0 // Inicialización de la variable que contendrá la edad
    let userLimit = 0 //Inicialización de la variable que contendrá el limite de usuarios a ingresar
    let userAgeAverage = 0 // Inicialización de la varible que contendrá el promedio entre de todas las edades ingresadas

    userLimit = parseInt(prompt('Ingrese la cantidad de usuarios a ingresar')) // Recibe lo ingresado por el prompt y lo guarda en la variable


    do {

        /* Validación de que la cantidad de usuarios a ingresar sea un número */
        if (isNaN(userLimit)) {

            alert('El número que usted ingresó es inválido') // Cartel que avisa al usuario que ingresó mal lo solicitado
            break; // Corta la ejecución del script

        } else { // En el caso de que el número sea un número, se hará lo solicitad

            userAge = parseInt(prompt('Ingrese su edad'))

            /* Validación de que la edad de los usuarios sea un número */
            if (isNaN(userAge)) {

                alert('La edad que usted ingresó no es válida') // Cartel que avisa al usuario que ingresó mal lo solicitado
                break; // Corta la ejecución del script

            } else { // En el caso de que la edad ingresada sea un número, hará lo solcitado

                userAgeAverage += userAge // Suma y almacena en 'userAgeAverage', todas las edades que se ingresen
                i++ // Va aumentando de 1 en 1 el contador que evalúa la condición del while

            }
        }
    } while (i < userLimit);

    userAgeAverage = userAgeAverage / userLimit

    return userAgeAverage
}
alert(`El promedio de los usuarios ingresados es de: ${userAgeAverage()}`)



