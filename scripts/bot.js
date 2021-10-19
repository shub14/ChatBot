const chatBox = document.getElementById("chatBox");
const botButton= document.getElementById("botBtn");


botButton.addEventListener('click', () => {
    chatBox.style.display = (chatBox.style.display === "none")?"block":"none";
})

