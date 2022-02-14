import RoomAvatar from "../components/RoomAvatar"
import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import DmCard from "../components/DmCard"

const Home = () => {
    return (
        <main>
            <div className="side-bar">
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
                <RoomAvatar />
            </div>
            <div className="main-view">
                <div className="conversations">
                    <div className="top-border-bottom">
                        <input type="search" placeholder="Find or start a conversation" />
                    </div>
                    <div className="space-50"></div>
                    DIRECT MESSAGES
                    <div className="space-10"></div>
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='online' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Buildspace' avatar={avatar4} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='offline' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='online' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Buildspace' avatar={avatar4} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='offline' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='online' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Buildspace' avatar={avatar4} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='offline' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='online' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Buildspace' avatar={avatar4} status='offline' />
                    <DmCard name='Langford' avatar={avatar2} status='offline' />
                    <DmCard name='Lo-fi beats' avatar={avatar3} status='online' />
                    <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                </div>
                <div className="chat-view">

                </div>
            </div>
        </main>
    )
}

export default Home