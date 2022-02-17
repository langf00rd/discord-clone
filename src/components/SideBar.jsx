import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import RoomAvatar from './RoomAvatar'
// import DmCard from './DmCard'
// import discord from '../assets/icons/discord.svg'

const SideBar = () => {
    return (
        <div className="side-bar">
            {/* <RoomAvatar avatar={discord} name='Home' className='home-btn' /> */}
            <RoomAvatar avatar={avatar1} name='Buildspace' />
            <RoomAvatar avatar={avatar2} name='nft-degens' />
            <RoomAvatar avatar={avatar3} name='LoFi-tunez' />
            <RoomAvatar avatar={avatar4} name='Memes' />


            {/* <DmCard name='Suzanna' id='123' avatar={avatar3} status='online' />
            <DmCard name='Rafeh' id='456' avatar={avatar1} status='online' />
            <DmCard name='Jerry' id='789' avatar={avatar4} status='offline' />
            <DmCard name='Langford' id='010' avatar={avatar2} status='online' /> */}
        </div>
    );
}

export default SideBar