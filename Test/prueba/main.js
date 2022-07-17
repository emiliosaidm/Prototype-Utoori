function renderizacion(min,max){
    let numerodeposibilidades=max-min;
    let aleatorio= (numerodeposibilidades)*Math.random();
    let num=Math.floor(aleatorio);
    return num
    }
    let uru=Math.random();
   let valores=[]
   for (let i=0;i<10;i++){
    valores.push(0)
   }
   for(let r=1; r<=100;r++){
       let inicial=renderizacion(2,10);
       valores[inicial]++;
   }
   console.log(valores)
   console.log(uru)