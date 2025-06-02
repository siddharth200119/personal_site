import { useState } from "react";
import { Send } from "lucide-react"; // Optional: use Heroicons, Lucide, or SVG

export default function ChatBar({ isChatActive, onMessageSend }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    if (onMessageSend) {
      onMessageSend(message); // Call the new prop
    }

    // Add message to messages array
    setMessages([...messages, { id: Date.now(), text: message, sender: 'user' }]);
    setMessage(""); // Clear input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={isChatActive ? 'chat-screen-active' : 'chatbar-inactive'}>
      {isChatActive && (
        <div className="message-display-area">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
      )}
      <div className="input-area w-2xs lg:w-3xl mx-auto flex items-center bg-gray-700 rounded-xl text-gray-100 px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask anything about me"
          className="flex-1 bg-transparent outline-none text-sm p-2 text-gray-100"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Simplified onChange
          onKeyDown={handleKeyDown}
          // onFocus removed
        />
        <button
          onClick={handleSend}
          className="text-gray-500 hover:text-blue-500 transition"
        >
          <Send size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
