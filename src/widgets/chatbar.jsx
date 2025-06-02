import { useState } from "react";
import { Send } from "lucide-react"; // Optional: use Heroicons, Lucide, or SVG

export default function ChatBar() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("Sending:", message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="w-full px-4 py-2">
      <div className="w-2xs lg:w-3xl mx-auto flex items-center bg-gray-700 rounded-xl text-gray-100 px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask anything about me"
          className="flex-1 bg-transparent outline-none text-sm p-2 text-gray-100"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
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
