function calcular(){
    var check = document.getElementById('entrada');
    if (check.checked) {
        comEntrada()
    } else{
        semEntrada()
    }
    function removerMascara(valor) {
        valor.split(' ')
        return Number((valor.replace(/\D/g, ''))/100);
    }

    function comEntrada(){
        var n = Number(window.document.getElementById('n').value);
        var i = removerMascara(window.document.getElementById('i').value);
        var pmt = removerMascara(window.document.getElementById('pmt').value);
        var pv = removerMascara(window.document.getElementById('pv').value);
        var fv = removerMascara(window.document.getElementById('fv').value);
        var res = window.document.getElementById('res');
        var res2 = window.document.getElementById('res2');

        if(n && i && pmt && !pv && !fv){ /////////////////////////
            i = i/100
            fv = pmt*(((1 +  i)**n-1)/i)*(1+ i);
            pv = (fv/(1+i)**n)
            res.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res2.innerHTML = 'O Valor Final é de R$' + fv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(n && i && fv && !pv && !pmt){ ////////////////////////////
            i = i / 100
            pv = fv/((1+i)**n)
            pmt = pv*((((1+i)**(n-1))*i)/(((1+i)**n)-1))
            res.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res2.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(n && fv && pv && !i && !pmt){ ////////////////////////////
            i = (((fv/pv)**(1/n))-1);
            i = i *100
            res.innerHTML = 'A Taxa de Juros Mensal é de ' + i.toFixed(5) + '%.';
            res2.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(fv && pv && i && !n && !pmt){ ////////////////////////////
            i = i /100
            n = (Math.log(fv / pv) / Math.log(1 + i));
            n = Math.ceil(n)
            pmt = pv*((((1+i)**(n-1))*i)/(((1+i)**n)-1))
            res.innerHTML = 'O período é de ' + n + ' meses.';
            res2.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }

        if(pv && i && n && !pmt && ! fv){  ////////////////////////////
            i = i / 100
            fv = pv*((1+i)**n)
            pmt = pv*((((1+i)**(n-1))*i)/(((1+i)**n)-1))
            res2.innerHTML = 'O Valor Futuro é de R$' + fv.toLocaleString('pt-BR') + '.';
            res.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && fv && i && !n && !pv){  ////////////////////////////
            i = i / 100
            n = (((Math.log((fv/pmt)*i+1)/(Math.log(1+i)))));
            n = Math.ceil(n)
            pv = (fv/(1+i)**n)
            res.innerHTML = 'O período é de ' + n + ' meses.';
            res2.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }

        if(i && pmt && pv && !fv && !n){ //***** 
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && pv && n && !i && !fv){ //***** 
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && fv && n && !i && !pv){ //***** 
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && pv && fv && !n && !i){ // ***** 
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
    }

    function semEntrada(){
        var n = Number(window.document.getElementById('n').value);
        var i = removerMascara(window.document.getElementById('i').value);
        var pmt = removerMascara(window.document.getElementById('pmt').value);
        var pv = removerMascara(window.document.getElementById('pv').value);
        var fv = removerMascara(window.document.getElementById('fv').value);
        var res = window.document.getElementById('res');
        var res2 = window.document.getElementById('res2');

         if(n && i && pmt && !pv && !fv){ //////////////////////////////
            i = i/100
            fv = pmt*((((1+i)**n)-1)/i)
            pv = (fv/(1+i)**n)   
            res.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res2.innerHTML = 'O Valor Final é de R$' + fv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(n && i && fv && !pv && !pmt){ //////////////////////////////
            i = i / 100
            pv = fv/((1+i)**n)
            pmt = pv*((((1+i)**n*i)/(((1+i)**n)-1)))
            res.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res2.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(n && fv && pv && !i && !pmt){ //////////////////////////////
            i = (((fv/pv)**(1/n))-1);
            pmt = pv*((((1+i)**n*i)/(((1+i)**n)-1)))
            i = i *100
            res.innerHTML = 'A Taxa de Juros Mensal é de ' + i.toFixed(5) + '%.';
            res2.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(fv && pv && i && !n && !pmt){ //////////////////////////////
            i = i /100
            n = Math.log(fv / pv) / Math.log(1 + i);
            n = Math.ceil(n)
            pmt = pv*((((1+i)**n*i)/(((1+i)**n)-1)))
            res.innerHTML = 'O período é de ' + n + ' meses.';
            res2.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');  
        }

        if(pv && i && n && !pmt && ! fv){ ////////////////////////////
            i = i / 100
            fv = pv*((1+i)**n)
            pmt = pv*((((1+i)**n*i)/(((1+i)**n)-1)))
            res2.innerHTML = 'O Valor Futuro é de R$' + fv.toLocaleString('pt-BR') + '.';
            res.innerHTML = 'O Valor da Prestação é de R$' + pmt.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && fv && i && !n && !pv){  ////////////////////////////
            i = i / 100
            n = (((Math.log((fv/pmt)*i+1)/(Math.log(1+i)))));
            n = Math.ceil(n)
            pv = (fv/(1+i)**n)
            res.innerHTML = 'O período é de ' + n + ' meses.';
            res2.innerHTML = 'O Valor Presente é de R$' + pv.toLocaleString('pt-BR') + '.';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(i && pmt && pv && !fv &&!n){ //*****
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && pv && n && !i && !fv){ //*****
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }   
        if(pmt && fv && n && !i && !pv){ //*****
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
        if(pmt && pv && fv && !n && !i){ //*****
            res.innerHTML = 'Erro';
            res2.innerHTML = 'Informações Insuficientes';
            res.classList.add('ani');
            res2.classList.add('ani');
        }
    }
}

function limp(){
    window.document.getElementById('n').value = '';
    window.document.getElementById('i').value = '';
    window.document.getElementById('pmt').value = '';
    window.document.getElementById('fv').value = '';
    window.document.getElementById('pv').value = '';
    window.document.getElementById('res').innerHTML = '';
    window.document.getElementById('res2').innerHTML = '';
    res.classList.remove('ani');
    res2.classList.remove('ani');
}
function verificarEnter(event) {    
    if (event.key === 'Enter') {
        calcular()
    }
}
function mascara(valor) {
    console.log('mascara')
	var valorAlterado = valor.value;
	valorAlterado = valorAlterado.replace(/\D/g, ""); 
	valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2"); 
	valorAlterado = valorAlterado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); 
	valorAlterado = valorAlterado;
	valor.value = "R$" + valorAlterado ;
}
function percent(valor) {
    console.log('mascara')
    var valorAlterado = valor.value;
    valorAlterado = valorAlterado.replace(/\D/g, ""); 

    if (valorAlterado === "") {
        valor.value = '% 0.00';
        return;
    }
    var numero = parseFloat(valorAlterado) / 100;
    valor.value = '% ' + numero.toFixed(2);
}