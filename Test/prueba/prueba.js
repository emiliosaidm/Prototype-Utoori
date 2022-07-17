let abrir=document.getElementById('?');
let divisor=document.getElementById('cajaretroalimentacion');
let validar=document.getElementById('validar')
let respuesta=document.getElementById('zonaeditorp1')
let resvalida=document.getElementById('respuestavalidada1')

abrir.addEventListener("click",()=>{
    divisor.style.display='block';
});

validar.addEventListener("click",()=>{
    respuesta.style.display='none';
    resvalida.style.display="block";
})

function render() {
    location.replace("pruebaejercicio2.php.html")
  }