import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import React from 'react'
import LoginForm from './components/LoginForm';

export default function App() {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine height='100vh'
                    projectID='5a4cc931-3c89-4cf2-863f-49ae6f04ade0'
                    userName={localStorage.getItem('username')}
                    userSecret={localStorage.getItem('password')}
                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
