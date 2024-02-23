function att(){
    var n = window.document.getElementById('numb')
    var res = window.document.getElementById('res')
    var num = Number(n.value)
    var resultado = ''
    for(x = 0; x < 10; x++ ){
        resultado += `${num} x ${x} = ${x * num}<br>`
    }
    res.innerHTML = resultado
}