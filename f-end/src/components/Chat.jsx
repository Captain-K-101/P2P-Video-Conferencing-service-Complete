import React, { useContext } from "react";

import "./chat.css";
import { SocketContext } from "../SocketContext";

const ChatBox = (props) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, messages, sendMessage } = useContext(SocketContext);

  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <>
      {callAccepted && !callEnded && (
      <div className="chat-room-container">
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
  )}  
  </>
  );
};

export default ChatBox;
