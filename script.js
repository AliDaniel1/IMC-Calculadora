const Peso = document.getElementById("Peso");
const Altura = document.getElementById("Altura");
const Respuesta = document.getElementById("Resp");
const Texto = document.getElementById("Texto");

const Calcular_IMC = ()=>{
    let resultado = Peso.value / Altura.value**2;
    Respuesta.innerHTML = Math.round(resultado*100)/100;

    if(resultado < 18.5){
        Texto.innerHTML = "Peso bajo";
        Texto.style.color = "#00f"
    };
    if(resultado <= 24.9 && resultado >= 18.5){
        Texto.innerHTML = "Peso normal";
        Texto.style.color = "#5dd239"
    }
    if(resultado >=24.9 && resultado <= 30){
        Texto.innerHTML = "Sobrepeso";
        Texto.style.color ="#f00"
    }
    if(resultado >= 30){
        Texto.innerHTML = "Estas muy gordo";
        Texto.style.color ="#f00"
    };
    if(Peso.value == 0 || Altura.value == 0 ){
        Respuesta.innerHTML ="";
        Texto.innerHTML = "Revise los datos ingresados"
        Texto.style.color = "#000"
    }
    if(Peso.value == "" && Altura.value == "" || Peso.value == null && Altura.value == null){
        Respuesta.innerHTML ="";
        Texto.innerHTML = "Debe introducir su peso y altura"
        Texto.style.color = "#000"
    };
};

window.addEventListener("keydown", (e)=>{
    const Tecla = e.keyCode;
    if(Tecla == 13){
        e.preventDefault();
        Calcular_IMC();
    }
})