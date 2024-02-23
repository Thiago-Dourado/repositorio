function solve(){
    var nome = window.document.getElementById('nome')
    var peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var res1 = window.document.getElementById('res1')
    var res2 = window.document.getElementById('res2')
    nome = nome.value
    peso = peso.value
    altura = altura.value
    var imc = peso/(altura*altura)

    res1.innerHTML = `<p id="r1"> Olá ${nome}, você tem ${altura}m e pesa ${peso}kgs.</p>`

    if(imc < 18.49){
        res2.innerHTML = `<p>Seu IMC é de ${imc}, você está <span style="color: red;">ABAIXO DO PESO</span>.</p>` 
    }
    else if(imc >= 18.5 && imc <= 24.99){
        res2.innerHTML = `<p>Seu IMC é de ${imc}, você está <p id="sla">NO PESO ADEQUADO</p>.</p>`
    }

    else if(imc >= 25 && imc <=29.99){
        res2.innerHTML = `<p>Seu IMC é de ${imc}, você está <span style="color: yellow;">ACIMA DO PESO</span>.</p>` 
    }   

    else if(imc >= 30){
        res2.innerHTML = `<p>Seu IMC é de ${imc}, você está <span style="color: red;">COM OBESIDADE</span>.</p>` 
    }
}    


