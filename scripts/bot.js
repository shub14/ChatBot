const chatBox = document.getElementById("chatBox");
const botButton= document.getElementById("botBtn");
const box = document.getElementById("box");
const content = document.getElementById("content");
window.onload = loadBox;

function loadBox(){
    if(box.style.opacity == 0){
        box.style.opacity = 1;
    }else{
        box.style.opacity = 0;
    }

    if(content.style.opacity == 0){
        content.style.opacity = 1;
    }else{
        content.style.opacity = 0;
    }
}

botButton.addEventListener('click', () => {
    // chatBox.style.display = (chatBox.style.display === "none")?"block":"none";
    if(chatBox.style.opacity == 0){
        chatBox.style.opacity = 1;
    }else{
        chatBox.style.opacity = 0;
    }
})

