import '../styles/Message.css';

export default function Message({ message }) {
    const isMe = message.sendByMe;

    return (
        <div className={`message-row ${isMe ? 'message-row-me' : 'message-row-other'}`}>
            <div className={`message-bubble ${isMe ? 'message-bubble-me' : 'message-bubble-other'}`}>
                <p>{message.content}</p>
            </div>
        </div>
    );
}