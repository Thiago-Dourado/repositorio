let c = 0

function enviar(){
    let txt = document.getElementById('txt').value
    if(txt.trim()!== ''){   
        if(c < 11){
        let newp = document.createElement('h3')
        newp.textContent = txt
        document.getElementById('res').appendChild(newp)
        document.getElementById('txt').value = ''
        c++
        }else{  
            window.alert('Máximo de itens atingido.')
        }
    }
        
}

function verificarEnter(event) {    
    if (event.key === 'Enter') {
        enviar();
    }
}