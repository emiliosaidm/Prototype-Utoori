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
  const todos = JSON.parse(localStorage.getItem('todos'))||[];
  const render=()=>{
      const todolist = document.getElementById('todolist');
      const todostemplate=todos.map(t=>{
          return "<li>"+t+"</li>";
      })
      todolist.innerHTML=todostemplate.join('')
      console.log(todostemplate)
      const selectodo= document.querySelectorAll('#todolist li')
      selectodo.forEach((selectodo,i)=>{
      selectodo.addEventListener('click',()=>{
          selectodo.parentNode.removeChild(selectodo);
          todos.splice(i,1);
          render();
        }) 
      })
  }
  render();
  window.onload=()=>{
  const form=document.getElementById('formis');
  form.onsubmit =(jass) => {
      jass.preventDefault(); 
      const todo=document.getElementById('todo');   
      const todotext=todo.value
      todo.value='';
      todos.push(todotext);
      const todosstring= JSON.stringify(todos);
      localStorage.setItem('todos',todosstring)
     render();
  }
  }
  
  

      
      