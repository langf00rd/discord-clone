const DmCard = (props) => {
    let roomId = sessionStorage.getItem('id') + props.id

    const changeUrl = () => {
        window.history.replaceState(null, props.name, `/channels/@me/${roomId}`)
        window.location.hash = props.name
    }

    return (
        <div className={window.location.hash === `#${props.name}` ? 'active-room dm-card' : 'dm-card'
        } onClick={changeUrl}>
            <div className="dm-avatar-container">
                <img src={props.avatar} className='dm-avatar' alt={props.name} />
                <div className="status" id={props.status}></div>
            </div>
            <p className="fade-text">{props.name}</p>
        </div>
    );
}

export default DmCard