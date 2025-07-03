import React, { useState } from "react";
import "./LiveChat.css";
import livechatopenbg from "./assets/Group 71.png"
import closebutton from "./assets/closebutton.png"
import sendicon from "./assets/sendicon.png"
import chatboticon from "./assets/chaticon.png"

type ChatMessage = {
  id: number;
  text: string;
  from: "user" | "bot";
};

const initialMessages: ChatMessage[] = [
  { id: 1, text: "Hey! 👋 Eu sunt Krov Acoperișuri un assistent digital.", from: "bot" },
  { id: 2, text: "Cu ce te pot ajuta astăzi?", from: "bot" }
];

const LiveChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);


  React.useEffect(() => {
    if (open) setVisible(true);
    else {
      // Wait for animation before removing from DOM
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: message, from: "user" }
      ]);
      setMessage("");
    }
  };
  return (
    <div>
      {!open && (
        <img
          src={chatboticon}
          className="livechat-chatboticon"
          alt="Deschide chat"
          onClick={() => setOpen(true)}
          style={{ position: "fixed", right: 40, bottom: 40, width: 80, height: 80, zIndex: 1001, cursor: "pointer" }}
        />
      )}
      {visible && (
        <div className={`livechat-modal${open ? "" : " closed"}`}>
          <img src={livechatopenbg} className="livechat-modal-bg" alt="Live Chat Modal BG" />
          <img
            src={closebutton}
            className="livechat-close-button"
            alt="Close"
            onClick={() => setOpen(false)}
          />
          <h1 className="live-chat-open-title">Krov Acoperișuri</h1>
          {/* Messages container */}
          <div className="livechat-messages">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`livechat-message livechat-message-${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="livechat-input-row">
            <input
              type="text"
              className="livechat-input"
              placeholder="Scrie-ți mesajul aici..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
            />
            <button
              className="livechat-send-btn"
              onClick={handleSend}
              type="button"
              aria-label="Trimite mesaj"
            >
              <img src={sendicon} alt="Send" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default LiveChat;