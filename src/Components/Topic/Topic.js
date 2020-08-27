import React from 'react';
import './Topic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/star-rating.png';

const Topic = (props) => {
    const { name, instructor, image, price, review } = props.course;

    return (

        <div className="topic">

            <div>
                <img src={image} alt="" />
            </div>

            <div>
                <h4>{name}</h4>
                <p>{instructor}</p>
                <h5 className="text-secondary"> <img style={{ height: '20px', display: 'inline' }} src={logo} alt="" /> ({review})</h5>
                <h3>${price} <del className="text-secondary"><small>${price}</small></del></h3>
                <button className="btn btn-success" onClick={() => props.addCourseEventHandler(props.course)}><FontAwesomeIcon icon={faUserPlus} /> Enroll Now</button>
            </div>


        </div>




    );
};

export default Topic;