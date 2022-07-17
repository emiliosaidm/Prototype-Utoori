

function renderizacion(min,max){
 let numerodeposibilidades=max-min;
 let aleatorio= (numerodeposibilidades)*Math.random();
 let num=Math.floor(aleatorio);
 }
let valores=[]
for (let i=0;i<=10;i++){
 valores.push(0)
}
for(let r=1; r<=10000;r++){
    let inicial=renderizacion(1,100);
    valores[inicial]++;
}
console.log("HOLAAA")