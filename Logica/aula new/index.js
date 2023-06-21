function resultadoFinal(n1,n2)
{
     n1 = parseInt(document.getElementById("valor1").value)
     n2 = parseInt(document.getElementById("valor2").value)
     let result = n1 + n2
     alert(result)
}
function resultadoFinal2(n1,n2)
{
     n1 = parseInt(document.getElementById("valor1").value)
     n2 = parseInt(document.getElementById("valor2").value)
     let result = n1 - n2
     alert(result)
}
function resultadoFinal3(n1,n2)
{
     n1 = parseInt(document.getElementById("valor1").value)
     n2 = parseInt(document.getElementById("valor2").value)
     let result = n1 / n2
     if(n2 == 0)
     {
        alert("O Divisor nao pode ser igual a zero")
     }else
     alert(result)
}
function resultadoFinal4(n1,n2)
{
     n1 = parseInt(document.getElementById("valor1").value)
     n2 = parseInt(document.getElementById("valor2").value)
     let result = n1 * n2
     alert(result)
}

