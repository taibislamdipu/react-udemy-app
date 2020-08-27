import React from 'react';
import fakeData from '../../fakeData/all-course';
import { useState } from 'react';
import './Course.css';
import Topic from '../Topic/Topic';
import Cart from '../Cart/Cart';
import CartSummary from '../CartSummary/CartSummary';

const Course = () => {

    const fifteenCourse = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(fifteenCourse);
    const [cart, setCart] = useState([]);

    const addCourseEventHandler = (course) => {

        const newCart = [...cart, course];
        setCart(newCart);
    };


    return (
        <div className="main-container">
            <div className="course-container">
                <h1>Let's start learning</h1>
                <h3>Available courses: {courses.length}</h3>
                {
                    courses.map(course => <Topic
                        course={course}
                        key={course.id}
                        addCourseEventHandler={addCourseEventHandler}

                    >{course.name}</Topic>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

            <div className="cart-summary">
                {
                    cart.map(singleTopic => <CartSummary
                        cart={singleTopic}
                        key={singleTopic.id}
                    ></CartSummary>)
                }
            </div>
        </div>


    );
};

export default Course;