function calcularIMC(peso, altura , callback){
    if(peso === undefined || altura === undefined){
        throw Error ("Digite peso e altura")
    }
    let imc = peso/ Math.pow(altura, 2)
    if(typeof callback === "function"){
            return callback(imc)
    }
    return imc
}

function classificaIMC(imc){
    if(imc<=16.9){
        return "Muito abaixo do peso"
    }else if(imc<= 18.4){
      return "Abaixo do peso"
    }else if(imc<= 24.9){
        return "Peso normal"
    }else if(imc<= 29.9){
      return "acima do peso"
    }else if(imc<= 34.9){
       return "Obesidade grau I"
    }else if(imc<= 40){
       return "Obesidade grau II"
    }else{
       return "Obesidade grau III"
    }
}


let imc = calcularIMC(58, 1.63)
let imc2 = calcularIMC(58, 1.63, classificaIMC)
console.log(imc)
console.log(imc2)