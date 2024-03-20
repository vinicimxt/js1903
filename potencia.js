//potencia = num1 ** num2
//area quadrado =  L X L // retangulo (b.a)/2
//num par = se mod(n)=1 então impar,senao par

const calcular = (function calcular(){
   
    function potencia(){
        let numero1 = 5;
        let expoente = 4;
        console.log(numero1 ** expoente);
        console.log("numero impar");
    
    }
    
    function areaQuadrado(){
        let lado = 31;
        console.log(lado * lado);
    }
    function trianguloRet(){
        let base = 5;
        let altura = 3;
        console.log((base * altura)/2) 
    }
    return {
        potencia() {
            potencia();
        }, 
        areaQuadrado() {
            areaQuadrado();
        },
        trianguloRet() {
            trianguloRet();
        }
    }
})();

calcular.potencia();
calcular.areaQuadrado();
calcular.trianguloRet();