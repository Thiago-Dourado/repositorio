function proc() {
    var idade = window.document.getElementById('idade');
    var i = Number(idade.value);
    var anoAtual = new Date().getFullYear();
    var aa = anoAtual - i;
    var res = window.document.getElementById('res');
    var pic = document.getElementById('img');

    if (i > anoAtual || i == 0) {
        window.alert('Verifique os dados e tente novamente');
    } else if (i > 0) {
        var ts = document.getElementsByName('radsex');
        var gen = "";

        if (ts[0].checked) {
            gen = "homem";
            if (10 > aa){
                pic.src = 'bebeh.jpg'
            }else if (21 > aa){
                pic.src = 'jovemh.jpg'
            }else if (50 > aa){
                pic.src = 'adultoh.jpg'
            }else
                pic.src = 'idosoh.jpg'

        } else if (ts[1].checked) {
            gen = "mulher";
            if (10 > aa){
                pic.src = 'bebem.jpeg'
            }else if (21 > aa){
                pic.src = 'jovemm.jpg'
            }else if (50 > aa){
                pic.src = 'adultam.jpg'
            }else
                pic.src = 'idosam.jpg'

        }
        res.innerHTML = `Detectamos um(a) ${gen} com ${aa} anos de idade`;
    }
}