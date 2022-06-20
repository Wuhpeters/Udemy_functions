function fn(cb){//function expression
    console.log("executar função de callback")
    cb()//executando função anonima que foi passada por parametro
}

fn(function (){//passando um função anonima como parametro de fn
    console.log("função passada por parametro")
})


//a de baixo é a mesma coisa

/*function fn(cb){
    console.log("executar função de callback")
    cb()
}

function callback(){
    console.log("função passada por parametro")
}

fn(callback)*/


/*const obj = {
    callback  //chama a funtion callback de cima
}

obj.callback()*/