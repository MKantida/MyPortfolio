import React, { Component } from 'react'
import profilepic from '../img/profile1.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <h3>Hi, I'm Kantida</h3>
                <p>
                    สวัสดีค่ะ ชื่อมายด์ กานต์ธิดา เทียนสุวรรณ
                </p>
                <p>
                    
                </p>

            </div>
        );
    }
}

export default About;