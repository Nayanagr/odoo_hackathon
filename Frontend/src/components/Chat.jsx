import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { FaSmile, FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "client", text: "Hello! Are you there?" },
    { sender: "user", text: "Hey! Yes, how can I help?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Simulated reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "client", text: "Thanks for the update!" }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-page">
      <div className="chat-header">Chat with Client</div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "sent" : "received"}`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>



<form className="chat-footer" onSubmit={handleSend}>
  <div className="chat-input-container">
    <FaSmile className="chat-icon" title="Emoji" />
    <FaPaperclip className="chat-icon" title="Attach" />
    <input
      type="text"
      className="chat-input"
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <FaMicrophone className="chat-icon" title="Voice" />
    <button className="send-btn" type="submit">
      <FaPaperPlane />
    </button>
  </div>
</form>


    </div>
  );
};

export default Chat;
