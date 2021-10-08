// ************** Declaración y asignación de variables. ***************
//Creando variables que contienen elementos HTML
var lblNumero = document.getElementById("lbl-numero")
var lblSigno = document.getElementById("lbl-signo")
var txtNumero = document.getElementById("txt-numero")
var btn0 = document.getElementById("btn-0")
var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var btn6 = document.getElementById("btn-6")
var btn7 = document.getElementById("btn-7")
var btn8 = document.getElementById("btn-8")
var btn9 = document.getElementById("btn-9")
var btnsuma = document.getElementById("btn-suma")
var btnresta = document.getElementById("btn-resta")
var btnmultiplicar = document.getElementById("btn-multiplicar")
var btndivision = document.getElementById("btn-division")
var btnporcentaje = document.getElementById("btn-porcentaje")
var btnexponente = document.getElementById("btn-exponente")
var btnraiz = document.getElementById("btn-raiz")
var btnln = document.getElementById("btn-ln")
var btnlog = document.getElementById("btn-log")
var btnans = document.getElementById("respuesta")
var btnce = document.getElementById("btn-CE")
var btnac = document.getElementById("borrar-todo")
var btnpunto = document.getElementById("btn-punto")
var btnigual = document.getElementById("btn-igual")


//Variables internas
var num1 = 0
var num2 = 0
var ans = 0
var signo = ""


//*********************Código de ejecución***********************
 txtNumero.value = ""
console.log("*********")

//Imprimiendo en pantalla el contenido y la porpiedad value
//console.log(lblNumero.innerHTML)
//console.log(txtNumero.value)

//Asignando un nuevo valor a la propiedad value
//txtNumero.value = "5to BACO"

//Imprimir el boton 1 en consola como variable independiente y arreglo con su índice
//console.log(btn4);
//console.log(botonera[1]);

//******* ESCUCHA DE FUNCIONES Y METODOS EN EVENTOS *********
btn1.addEventListener('click', seleccionNumero)
btn2.addEventListener('click', seleccionNumero)
btn3.addEventListener('click', seleccionNumero)
btn4.addEventListener('click', seleccionNumero)
btn5.addEventListener('click', seleccionNumero)
btn6.addEventListener('click', seleccionNumero)
btn7.addEventListener('click', seleccionNumero)
btn8.addEventListener('click', seleccionNumero)
btn9.addEventListener('click', seleccionNumero)
btn0.addEventListener('click', seleccionNumero)
btnsuma.addEventListener('click',seleccionarSigno)
btnresta.addEventListener('click',seleccionarSigno)
btndivision.addEventListener('click',seleccionarSigno)
btnmultiplicar.addEventListener('click',seleccionarSigno)
btnporcentaje.addEventListener('click',seleccionarSigno)
btnraiz.addEventListener('click',seleccionarSigno)
btnexponente.addEventListener('click',seleccionarSigno)
btnln.addEventListener('click',seleccionarSigno)
btnlog.addEventListener('click',seleccionarSigno)
btnans.addEventListener('click',respuesta)
btnigual.addEventListener('click', igual)
btnac.addEventListener('click', borrarTodo)
btnce.addEventListener('click', delite)


//***************** METODOS Y FUNCIONES *********************
function prueba(){
  console.log("Click de prueba "+this.value) 
}

function seleccionNumero(){
  console.log("Click correcto")
  txtNumero.value = txtNumero.value + this.value
}
function seleccionarSigno(){
  signo = this.value
 lblSigno.innerHTML = signo
  num1 = parseFloat(txtNumero.value)
  console.log(num1)
  txtNumero.value = ""
}

function respuesta(){
  txtNumero.value= ans
}
function igual(){
  num2 = parseFloat(txtNumero.value)
  switch (signo) {
    case "/":
      {
      console.log(parseInt(num1.value)/parseInt(num2.value))
    console.log(num1/num2)
       ans = (num1/num2)
       txtNumero.value = ans
        break
        
      }
    case "*":
      {
      console.log(parseInt(num1.value)*parseInt(num2.value))
      console.log(num1*num2)
        ans= (num1*num2)
      txtNumero.value = ans
        break
       
      }
    case "+":
      {
      console.log(parseInt(num1.value)+parseInt(num2.value))
      console.log(num1+num2)
         ans= (num1+num2)
      txtNumero.value = ans
        break
    
      }
      case "-":
      {
      console.log(parseInt(num1.value)-parseInt(num2.value))
      console.log(num1-num2)
          ans = (num1-num2)
       txtNumero.value = ans
        break
   
      }
      case "%":
      {
         console.log(parseInt(num1.value)*parseInt(num2.value)/100)
      console.log(num1*num2/100)
        ans = (num1*num2/100)
       txtNumero.value = ans
        break
     
      }
       case "ln":
      {
      console.log(Math.log(parseInt(num1.value)))
      console.log(Math.log(num1))
        ans = Math.log(num1)
       txtNumero.value = ans
        break
     
      }
      case "log":
      {
      console.log(Math.log10(parseInt(num1.value)))
      console.log(Math.log10(num1))
      ans = Math.log10(num1)
      txtNumero.value = ans
        break
     
      }
       case "√ ":
      {
       console.log(Math.sqrt(parseInt(num1.value)))
      console.log(Math.sqrt(num1))
       ans = Math.sqrt(num1)
       txtNumero.value = ans
        break
      }
      case "x²":
      {
      console.log(parseInt(num1.value)*parseInt(num1.value))
      console.log(num1*num1)
       ans= (num1*num1)
       txtNumero.value = ans
        break
    
      }
  }
}
function borrarTodo(){
  txtNumero.value = ""
}
function delite(){
  txtNumero.value = txtNumero.value.substring(0, txtNumero.value.length - 1)
}

//*********codigo sacado de varios trabajos de compañeras de clase y recibi ayuda aparte *********************