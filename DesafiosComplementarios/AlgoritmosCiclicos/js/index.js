let numero = 0 // Se declara e inicializa la variable numero
let sumador = 0 // Se declara e inicializa la variable sumador

//Se crea el bucle for para repetir en este caso 3 veces los ingresos mediante prompt
for (let i = 0; i < 3; i++) {
    numero = parseInt(prompt('Ingrese números')) //Guarda el ingreso por prompt parseandolo a su vez a int
    console.log(typeof (numero)) //Verifica que el tipo de dato sea el correcto
    sumador += numero //Almacena en la variable anteriormente creada la suma de los números ingresados
    console.log(sumador) //Muestra por consola cada valor del sumador en el bucle
    alert(`Usted ingresó ${numero}`) //Muestra por pantalla el valor de cada ingreso
}
alert(`El resultado es ${sumador}`) // Muestra por pantalla la suma total de todos los ingresos

/*

███████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗      ███╗   ███╗ █████╗ ██████╗ ████████╗██╗███╗   ██╗███████╗███████╗
██╔════╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║      ████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██║████╗  ██║██╔════╝╚══███╔╝
█████╗  █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║      ██╔████╔██║███████║██████╔╝   ██║   ██║██╔██╗ ██║█████╗    ███╔╝ 
██╔══╝  ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║      ██║╚██╔╝██║██╔══██║██╔══██╗   ██║   ██║██║╚██╗██║██╔══╝   ███╔╝  
██║     ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║      ██║ ╚═╝ ██║██║  ██║██║  ██║   ██║   ██║██║ ╚████║███████╗███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝

*/