// Row 1
let row1 = document.querySelector('.row1');
let rs1 = document.querySelector('#rs1');
let rs2 = document.querySelector('#rs2');
let rs3 = document.querySelector('#rs3');
let rsLabel1 = document.querySelector('#rs-label1');
let rsLabel2 = document.querySelector('#rs-label2');
let rsLabel3 = document.querySelector('#rs-label3');

// Row 2
let row2 = document.querySelector('.row2');
let int1 = document.querySelector('#int1');
let int2 = document.querySelector('#int2');
let int3 = document.querySelector('#int3');
let int4 = document.querySelector('#int4');
let intLabel1 = document.querySelector('#int-label1');
let intLabel2 = document.querySelector('#int-label2');
let intLabel3 = document.querySelector('#int-label3');
let intLabel4 = document.querySelector('#int-label4');

// Row 3
let row3 = document.querySelector('.row3');
let mod1 = document.querySelector('#mod1');
let mod2 = document.querySelector('#mod2');
let modLabel1 = document.querySelector('#mod-label1');
let modLabel2 = document.querySelector('#mod-label2');

// Row 5
let row5 = document.querySelector('.row5');
let sim1 = document.querySelector('#sim1');
let sim2 = document.querySelector('#sim2');
let sim3 = document.querySelector('#sim3');
let simLabel1 = document.querySelector('#sim-label1');
let simLabel2 = document.querySelector('#sim-label2');
let simLabel3 = document.querySelector('#sim-label3');

// Row 6
let row6 = document.querySelector('.row6');
let phone1 = document.querySelector('#phone1');
let phoneLabel1 = document.querySelector('#phone-label1');

// Recomanded modem
let recomandMod = document.querySelector('.recomand-mod');
let star1 = document.querySelector('.star1');

// Recomanded phone
let recomandPhone = document.querySelector('.recomand-phone');
let star2 = document.querySelector('.star2');

// Values
let total = document.querySelector('.total');

let s = {rsValue : 0, intValue: 0, modValue:0, simValue: 0, phoneValue:0};

function shuma(){
  let sum = parseInt(s.rsValue) + parseInt(s.intValue) + parseInt(s.modValue) 
        + parseInt(s.simValue) + parseInt(s.phoneValue);
  total.innerHTML = sum + '€';
  return sum;
}


row1.addEventListener('click', (event) => {
 if(rs1.checked){
   rsLabel1.classList.add('red');
   rsLabel2.classList.remove('red');
   rsLabel3.classList.remove('red');
   s.rsValue = rs1.value;
   shuma();
 } else if (rs2.checked) {
    rsLabel1.classList.remove('red');
    rsLabel2.classList.add('red');
    rsLabel3.classList.remove('red');
    s.rsValue = rs2.value;
    shuma();
 } else if (rs3.checked){
  rsLabel1.classList.remove('red');
  rsLabel2.classList.remove('red');
  rsLabel3.classList.add('red');
  s.rsValue = rs3.value;
  shuma();
 }
});

row2.addEventListener('click', (event) => {
  if(int1.checked){
    intLabel1.classList.add('red');
    intLabel2.classList.remove('red');
    intLabel3.classList.remove('red');
    intLabel4.classList.remove('red');
    s.intValue = int1.value;
    shuma();
  } else if (int2.checked) {
     intLabel1.classList.remove('red');
     intLabel2.classList.add('red');
     intLabel3.classList.remove('red');
     intLabel4.classList.remove('red');
     s.intValue = int2.value;
     shuma();
  } else if (int3.checked){
   intLabel1.classList.remove('red');
   intLabel2.classList.remove('red');
   intLabel3.classList.add('red');
   intLabel4.classList.remove('red');
   s.intValue = int3.value;
   shuma();
  } else if (int4.checked){
    intLabel1.classList.remove('red');
    intLabel2.classList.remove('red');
    intLabel3.classList.remove('red');
    intLabel4.classList.add('red');
    s.intValue = int4.value;
    shuma();
   }
 });

 row3.addEventListener('click', (event) => {
  if(mod1.checked){
    modLabel1.classList.add('red');
    modLabel2.classList.remove('red');
    s.modValue = mod1.value;
    shuma();
  } else if (mod2.checked) {
     modLabel1.classList.remove('red');
     modLabel2.classList.add('red');
     s.modValue = mod2.value;
     shuma();
  } 
 });

 row5.addEventListener('click', (event) => {
  if(sim1.checked){
    simLabel1.classList.add('red');
    simLabel2.classList.remove('red');
    simLabel3.classList.remove('red');
    s.simValue = sim1.value;
    shuma();
  } else if (sim2.checked) {
     simLabel1.classList.remove('red');
     simLabel2.classList.add('red');
     simLabel3.classList.remove('red');
     s.simValue = sim2.value;
     shuma();
  } else if (sim3.checked) {
    simLabel1.classList.remove('red');
    simLabel2.classList.remove('red');
    simLabel3.classList.add('red');
    s.simValue = sim3.value;
    shuma();
 }
 });

 row6.addEventListener('click', ()=> {
   if(phone1.checked){
     phoneLabel1.classList.add('red');
     s.phoneValue = phone1.value;
     shuma();
   }
 })

 document.addEventListener('click', () => {
   if((rs2.checked || rs3.checked) && int4.checked && !mod2.checked){
    star1.classList.remove('invisible');
    recomandMod.classList.add('myorange');
    star1.classList.add('orange');
   } 
   
   if ((rs2.checked || rs3.checked) && int4.checked && mod2.checked){
    star1.classList.add('invisible');
    recomandMod.classList.remove('myorange');
    star1.classList.remove('orange');
   } 
   
   if (mod1.checked) {
    star1.classList.add('invisible');
    recomandMod.classList.remove('myorange');
    star1.classList.remove('orange');
   }

   if(rs1.checked || int1.checked || int2.checked || int3.checked){
    star1.classList.add('invisible');
    recomandMod.classList.remove('myorange');
    star1.classList.remove('orange');
   }

 })

 document.addEventListener('click', () => {
  if(sim2.checked || sim3.checked){
   star2.classList.remove('invisible');
   recomandPhone.classList.add('myorange');
   star2.classList.add('orange');
  }  else if (sim1.checked) {
    star2.classList.add('invisible');
    recomandPhone.classList.remove('myorange');
    star2.classList.remove('orange');
  }

  if (phone1.checked) {
   star2.classList.add('invisible');
   recomandPhone.classList.remove('myorange');
   star2.classList.remove('orange');
  }
})