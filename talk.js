const chatBox = document.querySelector('#chat-box_cont');
const input = document.querySelector('#input');
const send = document.querySelector('#send');
const later = document.querySelector('#laterMessage');



function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    later.style.display = 'block';
    div.innerText = newMessage;
    chatBox.append(div);

  } else {
    alert('라두에게 메세지를 보내주세요!');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성해 주세요.
function sendMyTextByEnter(e){
  if(e.key === 'Enter' && !e.shiftKey){
    sendMyText();
    e.preventDefault();
  }
}
input.addEventListener('keypress',sendMyTextByEnter);
