function somar(){//serve para receber parametros sem necessariamente saber a quantidade
    console.log(arguments)
    total = 0
    for(i = 0; i< arguments.length; i++){
        total += arguments[i]
    } 
    return total
    
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(somar(1, 2, 3, 66, 8, 23, 50, 12, 53))

//não funciona em arrow function