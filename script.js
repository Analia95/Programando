let form = document.getElementById ("calculadora");

console.log("DOM" , form);


const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const PESO = document.getElementById("peso");


Calcular.addEventListener ("click", () => {
    let peso = PESO.valueAsNumber;
    console.log("El peso ingresado es: " + peso);

    if ( peso <= 0 || isNaN(peso)) {
        ERROR.style.display = 'block'; 
        PESO.onfocus = () => {
            ERROR.style.display = 'none'; 
        }
    } else {
        
        let resultado;

        if (peso <= 30) {
            
            resultado = HollidaySegar(peso);
PESO.value = ''; 
Console.log ('El resultado del calculo es:' + resultado);

let fluHora = Math.round(resultado / 24);
let mantenimiento = Math.round (fluHora * 1.5);

FLU.innerHTML = fluHora+ 'cc/hr';
MAN.innerHTML = 'm+m/2:' + mantenimiento + 'cc/hr';
FLU.style.display = "block";
            MAN.style.display = "block";
            PESO.onfocus = function () {
                FLU.style.display = "none";
                MAN.style.display = "none";
            };

        } else {
            
            let resultado1 = Math.round(superficieCorporal(peso) * 1500);
            let resultado2 = Math.round(superficieCorporal(peso) * 2000);

            PESO.value = ""; 
            console.log("El resultado de SC*1500 es: " + resultado1);
            console.log("El resultado de SC*2000 es: " + resultado2);

           
            let fluHora1 = Math.round(resultado1 / 24);
            let mantenimiento1 = Math.round(fluHora1 * 1.5);

            let fluHora2 = Math.round(resultado2 / 24);
            let mantenimiento2 = Math.round(fluHora2 * 1.5);

            
            FLU.innerHTML = "SCx 1500: " + resultado1 + "cc" + "<br>" + "- " + fluHora1 + "cc/hr" + "<br>" + "- m+m/2: " + mantenimiento1 + "cc/hr";
            MAN.innerHTML = "SC x 2000: " + resultado2 + "cc" + "<br>" + "- " + fluHora2 + "cc/hr" + "<br>" + "- m+m/2: " + mantenimiento2 + "cc/hr";
            FLU.style.display = "block";
            MAN.style.display = "block";
            PESO.onfocus = function () {
                FLU.style.display = "none";
                MAN.style.display = "none";
            };
        }
    }
});

function HollidaySegar(p) {
    let resultado;
    if (p <= 10) {
        resultado = p * 100;
    } else if (p > 10 && p <= 20) {
        resultado = 1000 + ((p - 10) * 50);
    } else {
        resultado = 1500 + ((p - 20) * 20);
    }
    return resultado;
}

function superficieCorporal(p) {
    let resultado = ((p * 4) + 7) / (p + 90);
    return resultado;
}