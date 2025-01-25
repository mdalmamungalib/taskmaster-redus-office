import React, { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5"; // Send icon
import { AiOutlineArrowLeft } from "react-icons/ai"; // Back icon

// Sample messages for demo
const sampleMessages = [
  { id: 1, user: "John", message: "Hey, how are you?" },
  { id: 2, user: "You", message: "I'm good, thanks!" },
  { id: 3, user: "John", message: "Great to hear! Let's catch up soon." },
];

const Chat = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: "You", message }]);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <AiOutlineArrowLeft className="text-xl cursor-pointer" />
        <h1 className="text-lg font-bold">Chat</h1>
        <div></div> {/* Empty div for alignment */}
      </div>

      {/* Chat Messages */}
      <div className="flex-grow p-4 overflow-y-auto bg-white">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs p-3 rounded-lg shadow-sm ${
                  msg.user === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center p-4 bg-gray-100">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-3 bg-blue-600 rounded-full text-white"
        >
          <IoSendSharp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
