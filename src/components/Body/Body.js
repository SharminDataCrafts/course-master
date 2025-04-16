import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';



const Body = () => {
    const [count,setCount] = useState([]);
    
    const handleCount=(course)=>{
        // console.log(course);
        const newCount = [...count,course];
        setCount(newCount)
    }

    return (
        <Container>
            <Row>   
                <Col md={8} className='mt-4'>
                    <CourseList handleCount={handleCount}></CourseList>
                </Col>
                <Col md={4} className="border-start border-3 position-fixed end-0 h-50 bg-light">
                    <Cart count={count}></Cart>
                </Col>
            </Row>
        </Container>
    );
};

export default Body;