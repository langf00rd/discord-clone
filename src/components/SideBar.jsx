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
            <RoomAvatar avatar={avatar1} name='Buildspace' />
            <RoomAvatar avatar={avatar2} name='nft-degens' />
            <RoomAvatar avatar={avatar3} name='LoFi-tunez' />
            <RoomAvatar avatar={avatar4} name='Memes' />
        </div>
    );
}

export default SideBar