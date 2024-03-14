function prod(){
    np = prompt('Digite o nome do produto')
    vp = prompt('Digite o valor do produto em R$')
    vd = prompt('Digite o valor recebido em R$')
    document.getElementById('alte1').innerHTML='Você irá comprar ' + np + ' por R$ ' + vp
    document.getElementById('alte2').innerHTML='Você irá deu ' + vd
    document.getElementById('alte3').innerHTML='Você irá receber de troco ' + vt
}