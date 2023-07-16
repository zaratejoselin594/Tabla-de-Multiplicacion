let num = document.querySelectorAll(".numero");
let res = document.querySelectorAll(".resultado")
const btn = document.querySelector(".boton");
const inp = document.querySelector(".input");

//Abrimos escucha al evento click
btn.addEventListener("click",(e) => {
  e.preventDefault();
  //detectamos que contenga numero el input
  if (inp.value.length == 0) {
    alert("Selecciona un número...");
  } else {
    // Hacemos que todos los p contengan el numero ingresado
    num.forEach(n => {
      n.textContent = inp.value; //mostramos el resultado
    });

    //iniciamos mult que sera el numero con el que vamos a multiplicar el numero ingresado
    let mult = 0

    res.forEach(r => { 
      mult++
      //Multiplicaremos el numero ingresado por el valor de mult de cada vuelta
      let result = inp.value * mult;
      r.textContent = result;  //mostramos el resultado
    });  
  }
})