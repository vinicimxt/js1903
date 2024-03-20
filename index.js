const sumUtils = (function sumUtils(){
    let value = 0;
 function bombaPatch(pontos) {
    return value += pontos;
}

return{
    rasteira(){
        return bombaPatch(-1);
    },
    golaco (){
        return bombaPatch(1);
    },
    placar(){
        console.log(value);
    }
}

})();
sumUtils.placar(); //0

sumUtils.golaco();
sumUtils.golaco();
sumUtils.placar(); //2

sumUtils.rasteira();
sumUtils.placar(); //1
