var lightcircle =document.getElementById('light')



var btnid=document.getElementById('btn')

function changeColour(){

    if(btnid.innerText==='On'){
        lightcircle.style.backgroundColor='yellow'
        btnid.innerText='Off'
        btnid.style.backgroundColor='red'
    }
    else{
        btnid.innerText='On'
        lightcircle.style.backgroundColor='black'
        btnid.style.backgroundColor='green'

    }
}