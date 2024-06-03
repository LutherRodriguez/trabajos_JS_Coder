/*Incorporar al menos un array.
Declarar variables y constantes según necesiten.
Incorporar funciones.
Incorporar al menos un condicional y al menos un ciclo de iteración.*/

//Nombre del proyecto: Organizador de guita

//1. Defino el ingreso como valor de referencia inicial para ser distribuido
let ingreso = parseInt(prompt("Monto del ingreso: "))
console.log("El ingreso es de: "+ingreso+ " \nPlanificación y estado de los gastos fijos:")

//2. Defino funciones por cada opción en la que será distribuido el ingreso

function alimentos (){
    let planAlimentos = parseInt(prompt("¿Cuánto se reserva para alimentos?"))
    let pgsAlimentos = parseInt(prompt("¿Cuánto se gastó"))
    let restAlimentos = planAlimentos - pgsAlimentos
    alert ("Se reservaron: "+planAlimentos+" - "+pgsAlimentos+" gastados  = "+restAlimentos+" restantes")
    console.log("1. ALIMENTOS Y CONSUMIBLES: "+planAlimentos+ "\nGastados al momento: "+pgsAlimentos+ "\nRestan de esta opción: "+restAlimentos)
}

function salidas (){
    let planSalidas = parseInt(prompt("¿Cuánto se reserva para salidas?"))
    let pgsSalidas = parseInt(prompt("¿Cuánto se gastó"))
    let restSalidas = planSalidas - pgsSalidas
    alert ("Se reservaron: "+planSalidas+" - "+pgsSalidas+" gastados  = "+restSalidas+" restantes")
    console.log("2. SALIDAS Y GUSTOS: "+planSalidas+ "\nGastados al momento: "+pgsSalidas+ "\nRestan de esta opción: "+restSalidas)
}

function servicios (){
    let planServicios = parseInt(prompt("¿Cuánto se reserva para servicios?"))
    let pgsServicios = parseInt(prompt("¿Cuánto se gastó"))
    let restServicios = planServicios - pgsServicios
    alert ("Se reservaron: "+planServicios+" - "+pgsServicios+" gastados  = "+restServicios+" restantes")
    console.log("3. SERVICIOS BÁSICOS E IMPUESTOS: "+planServicios+ "\nGastados al momento: "+pgsServicios+ "\nRestan de esta opción: "+restServicios)
}

function creditos (){
    let planCreditos = parseInt(prompt("¿Cuánto se reserva para créditos?"))
    let pgsCreditos = parseInt(prompt("¿Cuánto se gastó"))
    let restCreditos = planCreditos - pgsCreditos
    alert ("Se reservaron: "+planCreditos+" - "+pgsCreditos+" gastados  = "+restCreditos+" restantes")
    console.log("4. DEUDAS Y CRÉDITOS: "+planCreditos+ "\nGastados al momento: "+pgsCreditos+ "\nRestan de esta opción: "+restCreditos)
}

function vivienda (){
    let planVivienda = parseInt(prompt("¿Cuánto se reserva para vivienda?"))
    let pgsVivienda = parseInt(prompt("¿Cuánto se gastó"))
    let restVivienda = planVivienda - pgsVivienda
    alert ("Se reservaron: "+planVivienda+" - "+pgsVivienda+" gastados  = "+restVivienda+" restantes")
    console.log("5. ALQUILER, COSTO DE HABITACIÓN: "+planVivienda+ "\nGastados al momento: "+pgsVivienda+ "\nRestan de esta opción: "+restVivienda)
}

function otro (){
    let planOtro = parseInt(prompt("¿Cuánto se reserva para otros gastos?"))
    let pgsOtro = parseInt(prompt("¿Cuánto se gastó"))
    let restOtro = planOtro - pgsOtro
    alert ("Se reservaron: "+planOtro+" - "+pgsOtro+" gastados  = "+restOtro+" restantes")
    console.log("6. OTROS GASTOS: "+planOtro+ "\nGastados al momento: "+pgsOtro+ "\nRestan de esta opción: "+restOtro)
}

//3. Agrego un método switch/case para mostrar y definir las opciones de distribución del ingreso
let gastos = true
while(gastos) {
let pagos = parseInt(prompt("Escoje una(s) opción(es) para distribuir el dinero \n1: alimentos \n2: salidas \n3: servicios \n4: créditos \n5: vivienda \n6: otros"))
    switch(pagos) {
        case 1:
            alimentos()
            break
        case 2: 
            salidas()
            break
        case 3: 
            servicios()
            break
        case 4: 
            creditos()
            break    
        case 5: 
            vivienda()
            break
        case 6:
            otro()
            break
        default:
            alert("Ingresaste una opción equivocada, elija un número del 1 al 6")
            break
    }

    let confirmacion = prompt("Desea ingresar otro gasto? (si/no)")
    if(confirmacion == "no"){
        gastos=false
        console.log("Suerte!")
    }
}
//4. Almaceno en un array las funciones y las muestro en la consola
const opciones = [alimentos, salidas, servicios, creditos, vivienda, otro]
console.log(opciones.length)
console.log(opciones)

//5. Creo un objeto con la planificación de gastos a futuro

const transporte = {
    descripcion: "boleto aereo",
    costo: 500000
}
const hospedaje = {
    descripcion: "alquiler de habitación",
    costo: 200000
}

const viajeEgresados = [transporte, hospedaje]

alert ("Hay nuevos gastos planificandose, agrega cosas a la lista de: \nVIAJE DE EGRESADOS")
console.log ("\nVIAJE DE EGRESADOS")
console.table(viajeEgresados)

const nuevosGastos = () => {
    let descripcion = prompt("VIAJE DE EGRESADOS: \nConcepto del nuevo gasto")
    let costo = parseInt(prompt("¿cuánto representa en dinero? (expresado en números) "))
    
    const gasto = {
        descripcion: descripcion,
        costo: costo
    }
    viajeEgresados.push(gasto)
}

let nuevaOpcion = true
while (nuevaOpcion){
    nuevosGastos()
    let nuevaCarga = prompt("¿Desea agregar nuevos gastos al plan? (si/no)")
    if (nuevaCarga=="no"){
        nuevaOpcion = false
    }
}
console.log ("\nNuevos gastos del VIAJE DE EGRESADOS")
console.table(viajeEgresados)




