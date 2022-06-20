function teste(cb){
    console.log("teste")
    console.log(cb)//mostra o que é "[Funtion: fn]"
    cb()
}

function fn(){
    console.log("function anonima de callback") 
}

teste(fn)//passar somente o nome da funtion por parametro

/* mesma coisa que function fn
const fn = funtion (){//fn está armazenando a propria função
    console.log("função anonima")
}
*/

/* mesma coisa

teste(function(){
    console.log("function anonima de callback")
})*/