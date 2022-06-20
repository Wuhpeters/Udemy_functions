const teste = function(cb){
    console.log("função teste")
    cb(30)
}

const fn = function(param){
    console.log("funcao anonima de callbak")
    console.log(param)
}

//fn(30)

teste(fn)