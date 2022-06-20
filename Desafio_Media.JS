function media(){

    if(arguments.length === 0 ){//esse if não funciona
       return 0        
    }

    let soma = 0
    for(i=0;i<arguments.length;i++){

        if(typeof arguments[i] !== "number"){
            throw Error ("Digite apenas números")
        }   

        soma += arguments[i]
    }
    return soma / i //retorna a media
    //return (soma / i) || 0 // se a media for NaN, retorna 0
}

console.log(media())