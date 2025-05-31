const son1 = document.getElementById("son1");
const son2 = document.getElementById("son2");
const results = document.getElementById("results");
const plyus = document.getElementById("plyus");
const minus = document.getElementById("minus");
const kopaytiruv = document.getElementById("ko'paytiruv");
const boluv = document.getElementById("bo'luv");



import { qoshish,ayirish,kopaytir,bol } from "./calculator.js";


plyus.addEventListener("click",()=>{
   results.textContent="Natija: "+qoshish(+son1.value,+son2.value)
   
})
minus.addEventListener("click",()=>{
   results.textContent="Natija: "+ayirish(+son1.value,+son2.value)
   
})
kopaytiruv.addEventListener("click",()=>{
   results.textContent="Natija: "+kopaytir(+son1.value,+son2.value)
   
})
boluv.addEventListener("click",()=>{
   results.textContent="Natija: "+bol(+son1.value,+son2.value)
   
})