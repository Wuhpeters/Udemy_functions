(function(n1, n2, n3, n4){
    let isValid = false
    console.log("Init da function auto-invocavel", isValid, n1, n2, n3, n4)

        function init(){
            console.log("Init dentro da function")
        }
        init()
})(22, 42, 55, 12)//esse estilo de function mantem o escopo somente dentro dela e a executa automaticamente

