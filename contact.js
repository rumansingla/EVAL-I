const name = document.querySelector("#name");
const messageBox = document.querySelector("#message");
// messageBox.style.backgroundColor = "red";
const sendMessageBtn = document.querySelector("#sendMessage");
const sendMessage = (data)=>{
    const messageDiv = document.createElement("div");
    messageDiv.innerText = `Dear ${data}, your message has been sent. We will reach back to you as soon as possible.`;
    messageBox.appendChild(messageDiv);
    setTimeout(()=>{
        messageBox.innerHTML = ""
    }, 2000);
}

sendMessageBtn.addEventListener("click",()=>{
    sendMessage(name.value);
})
