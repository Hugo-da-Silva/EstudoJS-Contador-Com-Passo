
function contar() {
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.getElementById('res') // mudamos para getElementById para chamar a div res

    if (inicio.value.Length == 0 || fim.value.length == 0 || passo.value.length == 0) { // declarando valores a variaveis CASO não seja digitado nada nos campos
        window.alert (`[ERRO] faltando dados!`)
    } else {
            res.innerHTML = 'Contando: <br>'
            var i = Number(inicio.value) // aqui passamos o resutado dentro das variaveis de string para tipo number
            var f = Number(fim.value)    // por mais que digitamos numeros dentro das variaveis, o JS entende que é do tipo string e não number
            var p = Number(passo.value)
            if (p == 0) { // if criada para se caso o passo for 0 
                window.alert('Passo invalido, considerando passo 1')
                p = 1 // declarando valor ao passo caso ele seja 0
            }
        if (i < f) {
                // contagem crescente
            for(var c = i; c <= f; c += p) { // variavel contador começa com valor de i, se contador for <= fim, ai c conta de acordo com o passo digitado
                res.innerHTML += ` ${c} \u{27A6}` // depois do placeholder é a sequencia de codigos referente ao emoji        
            }
        } else {
                // contagem decrescente
            for(var c = i; c >= f; c -= p) { // variavel c começa no i, se contador for >= a fim, contado conta decrescente até o passo digitado
                res.innerHTML += ` ${c} \u{27A6}s`
            }
        }
        res.innerHTML += `\u{2716}`
            
    }
}