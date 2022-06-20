//retornar uma função como resultado de outra função

function fn2(n1 , n2){

    return function(n3){
        return n1 + n2 + n3
    }
}

const funcao2 = fn2(10, 4)
const mult = funcao2(2)
console.log(mult)

//mesma coisa abaixo

function fn3(){
    return function _fn3(){
        console.log("função retornada por parametro")
    }
}
fn3.conta = 0// atribuindo propriedade

const funcao3 = fn3()//em funcao3 será armazenado o return funtion _fn3
funcao3()
console.log(fn3.conta)