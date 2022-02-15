const MessageCard = (props) => {
    return (
        <div className="message-card">
            <div><img src={props.avatar} className='message-avatar' alt="" /></div>
            <div className="space-20"></div>
            <div className="message-content">
                <div className="flex">
                    <p className="message-sender">{props.sender}</p>
                    <div className="space-10"></div>
                    <small className="fade-text">{props.timestamp}</small>
                </div>
                <div className="message-text">{props.content}</div>
            </div>
        </div>
    );
}

export default MessageCard