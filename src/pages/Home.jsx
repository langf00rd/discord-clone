import RoomAvatar from "../components/RoomAvatar"
import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import DmCard from "../components/DmCard"
import MessageCard from "../components/MessageCard"
import plusFilled from '../assets/icons/plus-filled.svg'
import at from '../assets/icons/at.svg'
import video from '../assets/icons/video.svg'
import pin from '../assets/icons/pin.svg'
import personPlus from '../assets/icons/person-plus.svg'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import gift from '../assets/icons/gift.svg'
import gif from '../assets/icons/gif.svg'
import sticker from '../assets/icons/sticker.svg'
import smiley from '../assets/icons/smiley.svg'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
import discord from '../assets/icons/discord.svg'
import React, { useState } from "react"
import GUN from "https://cdn.skypack.dev/gun";

const Home = () => {
    const [roomName, setroomName] = useState()
    const [placeholder, setPlaceholder] = useState('Message...')
    const [messageText, setMessageText] = useState('')

    // const server = require('http').createServer().listen(8080);
    // const gun = GUN({ web: server });

    React.useEffect(() => {

        console.log(GUN())


        window.addEventListener('hashchange', function () {
            let name = window.location.hash.replace('#', "")
            // console.log(window.location.pathname.substring(6, 10))
            setroomName(name)
            setPlaceholder(`Message ${name}`)
            setMessageText('')
        })


    }, [])

    return (
        <main>
            <div className="side-bar">
                <RoomAvatar avatar={discord} className='home-btn' />
                <RoomAvatar avatar={avatar2} />
                <RoomAvatar avatar={avatar3} />
                <RoomAvatar avatar={avatar4} />
                <RoomAvatar avatar={avatar1} />
                <RoomAvatar avatar={avatar2} />
                <RoomAvatar avatar={avatar3} />
                <RoomAvatar avatar={avatar4} />
                <RoomAvatar avatar={avatar1} />
                <RoomAvatar avatar={avatar2} />
                <RoomAvatar avatar={avatar3} />
                <RoomAvatar avatar={avatar4} />
                <RoomAvatar avatar={avatar1} />
                <RoomAvatar avatar={avatar2} />
                <RoomAvatar avatar={avatar3} />
                <RoomAvatar avatar={avatar4} />
            </div>
            <div className="main-view">
                <div className="conversations">
                    <div className="top-border-bottom">
                        <input type="search" placeholder="Find or start a conversation" />
                    </div>
                    <div className="space-50"></div>
                    <div className="space-10"></div>
                    <div className="conversations-container">
                        <div className="flex hover-effect">
                            <img src={friends} className='svg' alt="" />
                            <div className="space-10"></div>
                            <p>Fiends</p>
                        </div>
                        <div className="space-20"></div>
                        <div className="flex hover-effect">
                            <img src={nitro} className='svg' alt="" />
                            <div className="space-10"></div>
                            <p>Nitro</p>
                        </div>
                        <div className="space-30"></div>
                        <b className="fade-text">DIRECT MESSAGES</b>
                        <div className="space-10"></div>
                        <DmCard name='Lo-fi' avatar={avatar3} status='online' />
                        <DmCard name='Rafeh' avatar={avatar1} status='offline' />
                        <DmCard name='Buildspace' avatar={avatar4} status='offline' />
                        <DmCard name='Langford' avatar={avatar2} status='online' />
                    </div>
                </div>

                <div className="chat-view">
                    <div className="top-border-bottom">
                        <div className="flex room-name">
                            <img src={at} className='svg' alt="" />
                            <div className="space-10"></div>
                            <h3>{roomName}</h3>
                            <div className="space-10"></div>
                            <div className="status" id="online"></div>
                        </div>
                        <div className="flex">
                            <img src={phone} className='svg' alt="" />
                            <div className="space-20"></div>
                            <img src={video} className='svg' alt="" />
                            <div className="space-20"></div>
                            <img src={pin} className='svg' alt="" />
                            <div className="space-20"></div>
                            <img src={personPlus} className='svg' alt="" />
                            <div className="space-20"></div>
                            <input type="search" placeholder="Search" />
                            <div className="space-20"></div>
                            <img src={inbox} className='svg' alt="" />
                            <div className="space-20"></div>
                            <img src={help} className='svg' alt="" />
                        </div>
                    </div>

                    <div className="space-50"></div>
                    <div className="space-20"></div>

                    <div className="messages-main-container">
                        <MessageCard avatar={avatar1} sender='Langford' timestamp='02/02/2022' content='Hello world' />
                    </div>

                    <div className="chat-input-container">
                        <div className="chat-input-wrapper">
                            <img src={plusFilled} className='svg' />

                            <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} type="text" className="input-box" placeholder={placeholder} ></textarea>

                            <div className="space-20"></div>
                            <img src={gift} className='svg' />
                            <div className="space-20"></div>
                            <img src={gif} className='svg' />
                            <div className="space-20"></div>
                            <img src={sticker} className='svg' />
                            <div className="space-20"></div>
                            <img src={smiley} className='svg' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home