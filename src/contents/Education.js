import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="มหาวิทยาลัยสวนดุสิต" where="คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์" from="2016" to="Present" />
                <Widecard title="โรงเรียนกุนนทีรุทธารามวิทยาคม" where="สาย วิทศาสตร์-คณิตศาสตร์" from="2011" to="2016" />
                
            </div>
        );
    }
}

export default Education;