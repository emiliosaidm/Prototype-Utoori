const abrir=document.getElementById("exapop");
const divisor=document.getElementById("agregaejercicio");
const cerrar=document.getElementById("img3");

function uru(){
    divisor.style.display='none';
}
abrir.addEventListener("click",()=>{
    divisor.style.display='';
    
})
cerrar.addEventListener("click",()=>{
    divisor.style.display='none';
    
})

function movimiento(){
    var pbarra=document.getElementById('barra');
    var progreso= 0;
    var tiempo= setInterval(mov,10);
    function mov(){
      if(progreso>=100){
        clearInterval(tiempo);
      }
      else{
        progreso++;
        pbarra.style.width=progreso+'%';
        pbarra.innerHTML=progreso*1+'%';
        }   
    }
  }
  
  setTimeout(regreso,1000);
  
  function regreso(){
    var pbarra=document.getElementById('barra');
    var progreso= 100;
    var tiempo= setInterval(mov,10);
    function mov(){
      if(progreso==0){
        clearInterval(tiempo);
      }
      else{
        progreso--;
        pbarra.style.width=progreso+'%';
        pbarra.innerHTML=progreso*1+'%';
        }   
    }
  }

      
      