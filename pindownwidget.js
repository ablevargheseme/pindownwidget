(function() {
    document.head.insertAdjacentHTML('beforeend', '<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" rel="stylesheet">');
  
    // Inject the CSS
    const style = document.createElement('style');
    style.innerHTML = `
    .hidden {
      display: none;
    }
    #chat-widget-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      flex-direction: column;
    }
    #chat-popup {
      height: 70vh;
      max-height: 70vh;
      transition: all 0.3s;
      overflow: hidden;
    }
    @media (max-width: 768px) {
      #chat-popup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0;
      }
    }
    `;
  
    document.head.appendChild(style);
  
    // Create chat widget container
    const chatWidgetContainer = document.createElement('div');
    chatWidgetContainer.id = 'chat-widget-container';
    document.body.appendChild(chatWidgetContainer);
    
    // Inject the HTML
    chatWidgetContainer.innerHTML = `
      <div id="chat-bubble" class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <div id="chat-popup" class="hidden absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm">
  
      <div id="chat-input-container" class="p-4 border-t border-gray-200">
      <div class="flex space-x-4 items-center">
          <img src="https://pindown.trizwit.com/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2Fbafybeifs5sx4wsnzjxph4fsnhtnvltk6wolxwfjpviqcn3geiskndmj4u4%2FPindown%20Ninja.png&w=1920&q=75" alt="Image">
          <span>haaai</span>
      </div>
  </div>
  
      </div>
    `;
  
    // Add event listeners
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');
    const chatMessages = document.getElementById('chat-messages');
    const chatBubble = document.getElementById('chat-bubble');
    const chatPopup = document.getElementById('chat-popup');
    const closePopup = document.getElementById('close-popup');
  
    // chatSubmit.addEventListener('click', function() {
      
    //   const message = chatInput.value.trim();
    //   if (!message) return;
      
    //   chatMessages.scrollTop = chatMessages.scrollHeight;
  
    //   chatInput.value = '';
  
    //   onUserRequest(message);
  
    // });
  
    // chatInput.addEventListener('keyup', function(event) {
    //   if (event.key === 'Enter') {
    //     chatSubmit.click();
    //   }
    // });
  
    chatBubble.addEventListener('click', function() {
      togglePopup();
    });
  
    closePopup.addEventListener('click', function() {
      togglePopup();
    });
  
    function togglePopup() {
      const chatPopup = document.getElementById('chat-popup');
      chatPopup.classList.toggle('hidden');
      if (!chatPopup.classList.contains('hidden')) {
        document.getElementById('chat-input').focus();
      }
    }  
  
  })();