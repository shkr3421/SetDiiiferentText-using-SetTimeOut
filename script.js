const text=document.querySelector('h1');
const submit=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
let timeoutId;
const change=function(){
    text.innerHTML='Button is clicked, Hello Shashank';
    document.querySelector('body').style.backgroundColor='black';
    text.style.color='white';
}
const time= function(){ 
    timeoutId=setTimeout(change, 1000)
}
const stop=function(){
    clearTimeout(timeoutId);
    text.innerHTML='Stop is clicked';
    document.querySelector('body').style.backgroundColor='white';
    text.style.color='black';
}
submit.addEventListener('click',time);
stopButton.addEventListener('click',stop);