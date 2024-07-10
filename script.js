document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const chatBubbles = document.getElementById('chat-bubbles');
  const chatInput = document.getElementById('txtChatMessage');

  sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      const bubble = document.createElement('li');
      bubble.className = 'chat-feed-item chat-feed-item--from-them chat-feed-item--last';
      bubble.innerHTML = `
        <div class="chat-feed-item__content">
          <div class="text-message">
            <div class="chat-bubble chat-bubble--from-them text-message__bubble">
              <div class="chat-bubble__content" aria-hidden="false" style="opacity: 1;">
                <span role="text">
                  <span class="screen-reader-text">User said</span>
                  <div class="text-message__bubble__content">${message}</div>
                </span>
              </div>
            </div>
          </div>
        </div>`;
      chatBubbles.appendChild(bubble);
      chatInput.value = '';
    }
  });

  chatInput.addEventListener('input', () => {
    if (chatInput.value.trim()) {
      sendButton.removeAttribute('disabled');
      sendButton.classList.remove('chat-input__form__send--inactive');
    } else {
      sendButton.setAttribute('disabled', 'true');
      sendButton.classList.add('chat-input__form__send--inactive');
    }
  });
});
