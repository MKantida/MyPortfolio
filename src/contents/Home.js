
import React, { Component } from 'react';
import profilepic from '../img/profile1.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Kantida', 'I am a Web Developer']} speed={50} eraseDelay={100} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;