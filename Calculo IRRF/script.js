function calcular(){
    var salario = window.document.getElementById('salario')
    var sal = window.document.getElementById('sal')
    var aliq = window.document.getElementById('aliq')
    var res = window.document.getElementById('res')
    var liq = window.document.getElementById('liq')

    salario = salario.value
    sal.innerHTML = `R$${salario}`
    
    if(salario < 2112.00){
        aliq.innerHTML = "0,00%"
        res.innerHTML = "Isento"
        liq.innerHTML = `R$${salario}`

    }
    
    else if(salario >= 2112.01 && salario <= 2826.65){
        var aliq1 = Number("7.5")
        aliq.innerHTML = "7,5%"
        var sef = (((salario*7.5)/100)-158.40)
        var sef = sef.toFixed(2)
        res.innerHTML = `O valor final de seu IRRF é de ${sef}R$!`
        liq.innerHTML = salario - sef
    }

    else if(salario >= 2826.66 && salario <= 3751.05){
        var aliq1 = Number("15")
        aliq.innerHTML = "15"
        var sef = (((salario*15)/100)-370.40)
        var sef = sef.toFixed(2)
        res.innerHTML = `O valor final de seu IRRF é de ${sef}R$!`
        liq.innerHTML = salario - sef
    }

    else if(salario >= 3751.06 && salario <= 4664.68){
        var aliq1 = Number("22.5")
        aliq.innerHTML = "22.5"
        var sef = (((salario*22.5)/100)-651.73)
        var sef = sef.toFixed(2)
        res.innerHTML = `O valor final de seu IRRF é de ${sef}R$!`
        liq.innerHTML = salario - sef
    }

    else if(salario >= 4664.68){
        var aliq1 = Number("27.5")
        aliq.innerHTML = "27.5"
        var sef = (((salario*27.5)/100)-884.96)
        var sef = sef.toFixed(2)
        res.innerHTML = `O valor final de seu IRRF é de ${sef}R$!`
        liq.innerHTML = salario - sef   
    }
}