var isLampOn = false;
var isLampBrk = false;

function turnOn(){
    if(!isLampOn, !isLampBrk){
        var imgOn = document.getElementById('Lamp');
        imgOn.src = 'ligada.jpg';
        isLampOn = true;
        isLampBrk = false;
    }
}

function turnOff(){
    if(isLampOn, !isLampBrk){
        var imgOff = document.getElementById('Lamp');
        imgOff.src = 'desligada.jpg';
        isLampOn = false;
        isLampBrk = false;
    }
}

function broke(){
    if(!isLampBrk)
    var imgbrk = document.getElementById('Lamp')
    imgbrk.src = 'quebrada.jpg'
    isLampBrk = true;
}