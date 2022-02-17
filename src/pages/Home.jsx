import React, { useState, useReducer } from "react"
import { faker } from '@faker-js/faker';
import Gun from 'gun'
import plusFilled from '../assets/icons/plus-filled.svg'
import personPlus from '../assets/icons/person-plus.svg'
import MessageCard from "../components/MessageCard"
import sticker from '../assets/icons/sticker.svg'
import friends from '../assets/icons/friends.svg'
import smiley from '../assets/icons/smiley.svg'
import video from '../assets/icons/video.svg'
import avatar1 from '../assets/avatar-1.webp'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import avatar2 from '../assets/avatar-2.png'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import nitro from '../assets/icons/nitro.svg'
import SideBar from "../components/SideBar"
import gift from '../assets/icons/gift.svg'
import help from '../assets/icons/help.svg'
import gif from '../assets/icons/gif.svg'
import DmCard from "../components/DmCard"
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'

const gun = Gun({
    peers: [
        'http://localhost:9000/gun'
    ]
})

const initialState = { messages: [] }

function reducer(state, action) {
    if (action.type == "add") return { messages: [...state.messages, action.data] }
    if (action.type == "clear") return { messages: [] }
}

const Home = () => {
    const [roomName, setroomName] = useState(window.location.hash.replace('#', ""))
    const [state, dispatch] = useReducer(reducer, initialState)

    const [placeholder, setPlaceholder] = useState('Message...')
    const [messageText, setMessageText] = useState('')
    const [name, setName] = useState('')

    React.useEffect(() => {
        observerRouteChange()

        const randomID = (Math.random() * 100000).toFixed(0)
        const randomName = faker.name.findName();

        sessionStorage.setItem('name', randomName)
        sessionStorage.setItem('id', randomID)

        const sessionName = sessionStorage.getItem('name').split(" ")[0]

        setName(sessionName)
        getMessages()

    }, [])

    const getMessages = () => {

        const _name = window.location.hash.replace('#', "")
        const _roomId = window.location.pathname.substring(14, 22)
        const messagesRef = gun.get(isPrivateChat() ? _roomId : _name)

        messagesRef.map().once(m => {
            dispatch({
                type: 'add', data: {
                    "sender": m.sender,
                    "content": m.content,
                    "avatar": m.avatar,
                    "createdAt": m.createdAt,
                }
            })
        })
    }

    const isPrivateChat = () => {
        let _path = window.location.pathname
        if (_path === "/channels") return false
        return true
    }

    const sendMessage = (e) => {

        e.preventDefault()

        if (messageText.trim() === '') return

        const _roomId = window.location.pathname.substring(14, 22)
        const messagesRef = gun.get(isPrivateChat() ? _roomId : roomName)

        messagesRef.set({
            "sender": name,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU",
            "content": messageText.trim(),
            "createdAt": Date().substring(4, 11),
        })

        setMessageText('')
    }

    const observerRouteChange = () => {
        window.addEventListener('hashchange', function () {

            let _name = window.location.hash.replace('#', "")
            let _path = window.location.pathname

            if (_path === "/channels") getMessages()
            else getMessages()

            dispatch({ type: 'clear', data: {} })
            setPlaceholder(`Message ${name}`)
            setMessageText('')
            setroomName(_name)
        })
    }

    return (
        <main>
            <SideBar />
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

                        <DmCard name='Suzanna' id='123' avatar={avatar3} status='online' />
                        <DmCard name='Rafeh' id='456' avatar={avatar1} status='online' />
                        <DmCard name='Jerry' id='789' avatar={avatar4} status='offline' />
                        <DmCard name='Langford' id='010' avatar={avatar2} status='online' />
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
                        {
                            state.messages.map((msg, index) => {
                                return <MessageCard key={index} avatar={msg.avatar} sender={msg.sender} timestamp={msg.createdAt} content={msg.content} />
                            })
                        }
                    </div>

                    <form onSubmit={e => sendMessage(e)} className="chat-input-container">
                        <div className="chat-input-wrapper">
                            <img src={plusFilled} className='svg' />

                            <input value={messageText} onChange={(e) => setMessageText(e.target.value)} type="text" className="input-box" placeholder={placeholder} />

                            <div className="space-20"></div>
                            <img src={gift} className='svg' />
                            <div className="space-20"></div>
                            <img src={gif} className='svg' />
                            <div className="space-20"></div>
                            <img src={sticker} className='svg' />
                            <div className="space-20"></div>
                            <img src={smiley} className='svg' />
                        </div>
                    </form>
                </div>
            </div>
        </main >
    )
}

export default Home