const RoomAvatar = (props) => {

    console.log(props)

    const changeUrl = () => {
        window.location.hash = props.name
    }

    return <div className="room-avatar-container " onClick={changeUrl}>
        <div className={window.location.hash === `#${props.name}` ? "room-avatar active-channel" : "room-avatar"}>
            <img src={props.avatar} className='' alt="" />
        </div>
    </div >
}

export default RoomAvatar