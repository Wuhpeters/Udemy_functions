/*function somar(){
    console.log(arguments)
    total = 0
    for(i = 0; i< arguments.length; i++){
        total += arguments[i]
    } 
    return total
    
}

console.log(somar.name)//obtem o nome da função*/

const somar = function s(){
    console.log(arguments)
    total = 0
    for(i = 0; i< arguments.length; i++){
        total += arguments[i]
    } 
    return total
    
}

console.log(somar.name)//obtem o nome da função