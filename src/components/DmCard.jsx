const DmCard = (props) => {
    return (
        <div className="dm-card">
            <div className="dm-avatar-container">
                <img src={props.avatar} className='dm-avatar' alt="" />
                <div className="status" id={props.status}></div>
            </div>
            <p>{props.name}</p>
        </div>
    );
}

export default DmCard