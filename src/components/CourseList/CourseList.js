import React from 'react';
import data from '../../data/data.json';
import Course from '../Course/Course';
import { Col, Container } from 'react-bootstrap';
import Row from './../../../node_modules/react-bootstrap/esm/Row';


const CourseList = ({handleCount}) => {
    // console.log(data);
    return (
        <Container className='mt-4'>
            <Row className="justify-content-center">
            {
                data.map(course=>(
                    <Col className='mb-4' key={course._id}>
                        <Course course={course}  handleCount={handleCount}></Course>
                    </Col>
                ))
            }
            </Row>
        </Container>
    );
};

export default CourseList;