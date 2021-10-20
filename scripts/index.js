const chatButton = document.getElementById("chatButton");
const iframe = document.querySelector("iframe");


chatButton.addEventListener('click', () =>{
    if(iframe.style.opacity == 0){
        iframe.style.opacity = 1;
    }else{
        iframe.style.opacity = 0;
    }
})