
// 3.6

// let n, quadrado, raiz

// n = Number(prompt("digite um numero: "))

// quadrado = n**2
// raiz + Math.sqrt(n)

// alert ("o quadrado de " + quadrado)

// 3.7

// let n1, n2, media

// n1 = prompt("Digite o Numero inicial:")
// n1 = Number(n1)

// n2 = Number(prompt("DIgite o Segundo Numero:"))


// media = (n1 + n2) / 2
// alert("Sua media é:" + media)


// 3.8

// let corre1, corre2, corre3, corre4, corre5, quantoGanhou
// corre1 = Number(prompt("Corre 1: "))
// corre2 = Number(prompt("Corre 2: "))
// corre3 = Number(prompt("Corre 3: "))
// corre4 = Number(prompt("Corre 4: "))
// corre5 = Number(prompt("Corre 5: "))
// quantoGanhou = (corre1 + corre2 + corre3 + corre4 + corre5)
// alert("Ganhou no dia: " + quantoGanhou.toFixed(2))

// 3.9
// let corre1, corre2, corre3, corre4, corre5, quantoGanhou
// corre1 = Number(prompt("Corre 1: "))
// corre2 = Number(prompt("Corre 2: "))
// corre3 = Number(prompt("Corre 3: "))
// corre4 = Number(prompt("Corre 4: "))
// corre5 = Number(prompt("Corre 5: "))
// quantoGanhou = (corre1 + corre2 + corre3 + corre4 + corre5) % 25
// alert("Ganhou no dia: " + quantoGanhou.toFixed(2))

// 3.10

// let n1 , n2 , n3, n4 , n5 , resultado, salario 

// n1 = Number(prompt("Corrida 1: "))
// n2 = Number(prompt("Corrida 2"))
// n3 = Number(prompt("Corrida 3"))
// n4 = Number(prompt("Corrida 4"))
// n5 = Number(prompt("Corrida 5"))

// resultado = ((n1 + n2 + n3 + n4 + n5) * 0.75)

// salario = resultado *20 
// alert("Seu salario final do mês  " + salario)

3.11

let HT, VH, PD, SB, SL, SalarioTotal

HT = Number (prompt("Horas trabalhadas no mes"))

VH = Number (prompt("Valor da hora trabalhada"))

PD = Number (prompt("Percentual de desconto"))

SB = HT * VH 

TD = (PD/100) *SB

SL = SB - TD

alert("Salario Bruto " + SB)
alert("Salario Liquido " + SL)
alert("Total de Desconto " + TD)
alert("Seu valor do horas Trabalhadas " + VH)
