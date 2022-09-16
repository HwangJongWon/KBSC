import { useEffect, useState } from "react";

export default function WebSocketCall({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleText = (e) => {  //텍스트 상자에 입력할 때 상태를 업데이트
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
  }, [socket, messages]);

  return (
  //   <div>
  //   <img
  //    src="http://localhost:5000/video_feed"
  //    alt="Video"
  //   />
  //  </div>
    
    <div>
      <h2>WebSocket Communication</h2>
      <input type="text" value={message} onChange={handleText} />
      <button onClick={handleSubmit}>submit</button>
      <ul>
        {messages.map((message, ind) => {
          return <li key={ind}>{message}</li>;
        })}
      </ul>
    </div>
  );
}