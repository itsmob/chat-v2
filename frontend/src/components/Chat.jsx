import './css/Chat.css';
import io from 'socket.io-client';
import { BACKEND_URI } from '../../config.js';
import { useState, useEffect, useRef } from 'react';
import { useUser } from '../contexts/AuthContext.jsx';

const socket = io(BACKEND_URI);

function Chat() {
  const chat = useRef();
  const { user, logout } = useUser();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length == 0) return;
    const playload = {
      msg: message,
      from: user.name,
    };
    socket.emit('client:send-message', playload);
    setMessages([...messages, playload]);
    setMessage('');
  };

  const handleMsgChange = (e) => setMessage(e.target.value);

  const recieveMsg = (payload) => setMessages((state) => [...state, payload]);

  useEffect(() => {
    socket.on('server:send-message', recieveMsg);

    return () => socket.off('server:send-message');
  }, []);

  useEffect(() => {
    chat.current.scrollTo(0, chat.current.scrollHeight);
  }, [messages]);

  return (
    <>
      <div className='chat'>
        <div className='chat-msgs' ref={chat}>
          <ul className='msgs'>
            {messages.map((msg, i) =>
              msg.from == user.name ? (
                <li key={i} className='me'>
                  <span>Me</span>
                  <p>{msg.msg}</p>
                </li>
              ) : (
                <li key={i} className='not-me'>
                  <span>{msg.from}</span>
                  <p>{msg.msg}</p>
                </li>
              ),
            )}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className='chat-form'>
          <input
            type='text'
            placeholder='Write your message here'
            onChange={handleMsgChange}
            className='chat-input-msg'
            value={message}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Chat;
