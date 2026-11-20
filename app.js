const payoutMethod=document.querySelector('#payout-method');
const revealButton=document.querySelector('#reveal');
const revealBox=document.querySelector('#reveal-box');
payoutMethod.addEventListener('change',()=>{revealButton.disabled=!payoutMethod.value;});
revealButton.addEventListener('click',()=>{if(!payoutMethod.value)return;revealBox.hidden=false;revealButton.textContent='المفاجأة انكشفت 😂';revealButton.disabled=true;revealBox.scrollIntoView({behavior:'smooth',block:'center'});});