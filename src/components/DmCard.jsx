const DmCard = (props) => {
    let randomID = (Math.random() * 100000).toFixed(0)

    const changeUrl = () => {
        window.history.replaceState(null, props.name, `/channels/@me/${randomID}`)
        window.location.hash = props.name
    }

    return (
        <div className={window.location.hash === `#${props.name}` ? 'active-room dm-card' : 'dm-card'
        } onClick={changeUrl} >
            <div className="dm-avatar-container">
                <img src={props.avatar} className='dm-avatar' alt="" />
                <div className="status" id={props.status}></div>
            </div>
            <p className="fade-text">{props.name}</p>
        </div >
    );
}

export default DmCard