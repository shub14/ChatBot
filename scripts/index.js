const chatButton = document.getElementById("chatButton");
const iframe = document.querySelector("iframe");


chatButton.addEventListener('click', () =>{
    iframe.style.display = (iframe.style.display === "none")?"block":"none";
})