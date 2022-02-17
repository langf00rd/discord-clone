import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
// import discord from '../assets/icons/discord.svg'
import RoomAvatar from './RoomAvatar'

const SideBar = () => {
    return (
        <div className="side-bar">
            {/* <RoomAvatar avatar={discord} name='Home' className='home-btn' /> */}
            <RoomAvatar avatar={avatar1} name='James' />
            <RoomAvatar avatar={avatar2} name='David' />
            <RoomAvatar avatar={avatar3} name='Peter' />
            <RoomAvatar avatar={avatar4} name='Esther' />
        </div>
    );
}

export default SideBar