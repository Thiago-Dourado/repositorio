const array = []

    function calcular (){
        
        let salario = document.getElementById('sal')
        let sal = parseInt(salario.value, 10)

        let meses = document.getElementById('mtb')
        let mtb = parseInt(meses.value, 10)


        if(!isNaN(sal) && !isNaN(mtb) && mtb > 0){
            array.push(sal) 
            salario.value = '' 
            var pch = ''

                if (array.length === 1) {
                    pch = 'Salário do 2°mes'
                }else if (array.length === 2) {
                    pch = 'Salário do 3°mes'
                }else if (array.length === 3) {
                    pch = 'Salário do 4°mes'
                }else if (array.length === 4) {
                    pch = 'Salário do 5°mes'
                }else if (array.length === 5) {
                    pch = 'Salário do 6°mes'
                }else if (array.length === 6) {
                    pch = 'Salário do 7°mes'
                }else if (array.length === 7) {
                    pch = 'Salário do 8°mes'
                }else if (array.length === 8) {
                    pch = 'Salário do 9°mes'
                }else if (array.length === 9) {
                    pch = 'Salário do 10°mes'
                }else if (array.length === 10) {
                    pch = 'Salário do 11°mes'
                }else if (array.length === 11) {
                    pch = 'Salário do 12°mes'
                }
                salario.placeholder = pch

            if(array.length === mtb){
                const res = document.getElementById('res')
                const soma = array.reduce((total,num) => total + num,0)
                let dias = (mtb/12)*30
                const media = soma / mtb
                let ferias = dias*media/30
                let total = ferias/3+ferias
                let final1 = total.toFixed(2)
                let final2 = final1.replace('.',',')
                res.innerHTML = `<p>Você trabalhou ${mtb} meses e consegue tirar ${dias} dias de férias.</p> <br> <p>Sua remuneração será de R$${final2} sem os descontos. `
            }
        
        }else{
                alert('INSIRA UM VALOR')
        }
    }
    function verificarEnter(event) {    
        if (event.key === 'Enter') {
            calcular();
        }
    }
    function onClear() {
        window.location.reload()
        
}