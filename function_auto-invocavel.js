(function(){
    let isValid = false
    console.log("Init da function auto-invocavel", isValid)

        function init(){
            console.log("Init dentro da function")
        }
        init()
})()//esse estilo de function mantem o escopo somente dentro dela e a executa automaticamente