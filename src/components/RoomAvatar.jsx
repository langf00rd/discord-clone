const RoomAvatar = (props) => {
    return (
        <div className="room-avatar-container">
            <div className="room-avatar">
                <img src={props.avatar} className='' alt="" />
            </div>
        </div >
    );
}

export default RoomAvatar