var nm1 = document.getElementById('n1')
var nm2 = document.getElementById('n2')


function pegaNome(){
    var nome = document.getElementById('nome').value
    document.getElementById('resultado').innerHTML = nome
}

function somar(){
    var r = parseFloat(nm1.value) + parseFloat(nm2.value)
    console.log(r)
    document.getElementById('resultado').innerHTML = r
}

function sub(){
    var r = parseFloat(nm1.value) - parseFloat(nm2.value)
    console.log(r)
    document.getElementById('resultado').innerHTML = r
}

function mult(){
    var r = parseFloat(nm1.value) * parseFloat(nm2.value)
    console.log(r)
    document.getElementById('resultado').innerHTML = r
}

function divi(){
    var r = parseFloat(nm1.value) / parseFloat(nm2.value)
    console.log(r)
    document.getElementById('resultado').innerHTML = r
}