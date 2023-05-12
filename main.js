let num = document.querySelectorAll(".numero");
let res = document.querySelectorAll(".resultado")
const btn = document.querySelector(".boton");
const inp = document.querySelector(".input");


btn.addEventListener("click",(e) => {
  e.preventDefault();
  if (inp.value.length == 0) {
    alert("Selecciona un número...");
  } else {
    num.forEach(n => {
      n.textContent = inp.value;
    });
    let mult = 0
    res.forEach(r => { 
      mult++
      let result = inp.value * mult;
      r.textContent = result; 
    });  
  }
})