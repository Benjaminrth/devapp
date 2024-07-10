

document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('txtChatMessage');
    const messageText = input.value.trim();
    
    if (messageText) {
        const chatBubbles = document.getElementById('chat-bubbles');
        const messageElement = document.createElement('li');
        
        if (messageText.startsWith('user:')) {
            messageElement.className = 'chat-feed-item chat-feed-item--from-them';
            const textContent = messageText.replace('user:', '').trim();
            const bubbleElement = document.createElement('div');
            bubbleElement.className = 'chat-bubble chat-bubble--from-them';
            bubbleElement.innerHTML = `<div class="chat-bubble__content"><div class="text-message__bubble__content">${textContent}</div></div>`;
            messageElement.appendChild(bubbleElement);
        } else if (messageText.startsWith('bot:')) {
            messageElement.className = 'chat-feed-item chat-feed-item--from-me';
            const textContent = messageText.replace('bot:', '').trim();
            const bubbleElement = document.createElement('div');
            bubbleElement.className = 'chat-bubble chat-bubble--from-me';
            bubbleElement.innerHTML = `<div class="chat-bubble__content"><div class="text-message__bubble__content">${textContent}</div></div>`;
            messageElement.appendChild(bubbleElement);
        }

        chatBubbles.appendChild(messageElement);
        chatBubbles.scrollTop = chatBubbles.scrollHeight;
        input.value = '';
        document.getElementById('send-button').disabled = true;
        document.getElementById('send-button').classList.add('chat-input__form__send--inactive');
    }
});
