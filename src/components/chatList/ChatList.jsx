import React from 'react'
import './chatList.css'
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {

    //

    return (
        <div className='chatList'>
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/">Explore Lama AI</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className="title">RECENT CHATS</span>
            <div className="list">
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
                <Link to='./'>New Chat Title</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src="/demon.png" alt="" />
                <div className="texts">
                    <span>Upgrade to Demon AI Pro</span>
                    <span>Get unlimited access to all demon powers</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList