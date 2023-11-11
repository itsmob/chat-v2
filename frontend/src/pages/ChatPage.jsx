import './css/ChatPage.css';
import Chat from '../components/Chat';

export default function ChatPage() {
  return (
    <>
      <main className='chat-page huge-container'>
        <div className='container'>
          <div className='chat-container'>
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
}
