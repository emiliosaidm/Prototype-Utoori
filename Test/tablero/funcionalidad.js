const abrir=document.getElementById("exapop");
const divisor=document.getElementById("agregaejercicio");
const cerrar=document.getElementById("img3");
const nuevoalumno=document.getElementById('nuevoalumno');
const divalumno=document.getElementById('agregaalumno');
const cierraalumno=document.getElementById('img4');

nuevoalumno.addEventListener("click",()=>{
    divalumno.style.display='grid';
    
})

cierraalumno.addEventListener("click",()=>{
    divalumno.style.display='none';
    
})

abrir.addEventListener("click",()=>{
    divisor.style.display='grid';
    
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
  
  setTimeout(regreso,1500);
    
  setTimeout(movimiento,40);
  
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
  
  const todos = [];
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
    const todosa = [];
  const rendera=()=>{
      const todolista = document.getElementById('alumnili');
      const todosatemplate=todosa.map(g=>{
          return "<li>"+g+"</li>";
      })
      todolista.innerHTML=todosatemplate.join('')
      console.log(todosatemplate)
      const selectodoa= document.querySelectorAll('#alumnili li')
      selectodoa.forEach((selectodoa,s)=>{
      selectodoa.addEventListener('click',()=>{
          selectodoa.parentNode.removeChild(selectodoa);
          todosa.splice(s,1);
          rendera();
        }) 
      })
  }
  rendera();
 
  const formsa=document.getElementById('formu');
  formsa.onsubmit =(jassu) => {
      jassu.preventDefault(); 
      const todoa=document.getElementById('todasa');   

      const todotexta=todoa.value
      todoa.value='';
      todosa.push(todotexta);
      const todosastring= JSON.stringify(todosa);
      localStorage.setItem('todosa',todosastring)
     rendera();
  }

  function pruebadepregunta (){ 
    window.open('../prueba/pruebaejercicio.php.html',"ventana1","width=700,height=400,scrollbars=NO") 
 }