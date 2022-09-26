let notas;
let promedio;
let suma = 0;
let nNotas = Number(prompt("Ingrese la cantidad de notas a promediar"));




for(i = 0; i < nNotas; i++){
    let notas = Number(prompt("Ingrese la nota: " + i));
    suma = suma + notas;


}

promedio = suma / nNotas;

if(promedio >= 6){
    alert("El promedio grupal es " + promedio + " y está aprobado")
}else{
    alert("El promedio grupal es " + promedio + " y está desaprobado")
}










