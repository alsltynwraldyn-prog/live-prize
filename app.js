const options=[...document.querySelectorAll('.method')];
const next=document.querySelector('#continue');
const result=document.querySelector('#result');
const resultText=document.querySelector('#result-text');
let selected='';
options.forEach(option=>option.addEventListener('click',()=>{
  selected=option.dataset.method;
  options.forEach(item=>item.setAttribute('aria-checked',String(item===option)));
  next.disabled=false;
  result.hidden=true;
}));
next.addEventListener('click',()=>{
  if(!selected)return;
  resultText.textContent='اختيارك التجريبي: '+selected+'. لم يتم إرسال أو حفظ أي بيانات.';
  result.hidden=false;
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
});