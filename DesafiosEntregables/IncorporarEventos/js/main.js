let userForm = document.querySelector('#userForm')
let userPass = document.querySelector('#userPass')
let userError = document.querySelector('#userError')
userForm.addEventListener('submit', userValidate)

function userValidate(event) {
    event.preventDefault()

    let arrForm = event.target
    let userName = arrForm[0]
    let userEmail = arrForm[1]
    let userPass = arrForm[2]



    if (!userName.value) {
        //Validación si el nombre está vacío
        userError.style.display = 'block'
        userError.innerText = 'Error!\nEl nombre no puede estar vacío'
        userError.style.color = 'red'

    } else if (userName.value.length < 4) {
        //Validación largo del nombre
        userError.style.display = 'block'
        userError.innerText = 'Error!\nEl usuario debe tener más de 4 caracteres'
        userError.style.color = 'red'

    } else if (!userEmail.value) {
        //Validación si el email está vacío
        userError.style.display = 'block'
        userError.innerText = 'Error!\nEl nombre no puede estar vacío'
        userError.style.color = 'red'

    } else if (!userPass.value) {
        //Validación si la contraseña está vacía
        userError.style.display = 'block'
        userError.innerText = 'Error!\nLa contraseña no puede estar vacía'
        userError.style.color = 'red'

    } else if (userPass.value.length < 8) {
        //Validación largo de la contraseña
        userError.style.display = 'block'
        userError.innerText = 'Error!\nLa contraseña debe tener más de 8 caracteres'
        userError.style.color = 'red'
    } else {
        //Desaparece el mensaje de error de las anteriores validaciones
        userError.style.display = 'none'

    }

    console.log(`Nombre: ${userName.value} \nEmail: ${userEmail.value} \nContraseña: ${userPass.value}`)

    return

}