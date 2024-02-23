function rodar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    var startx = Number(inicio.value)
    var endx = Number(fim.value)    
    var passx = Number(passo.value)

    var resultado = ''

        while(startx <= endx){
            resultado += startx + ` ,`
            startx += passx
        }
    
    res.innerHTML = resultado.slice(0,-2)
}