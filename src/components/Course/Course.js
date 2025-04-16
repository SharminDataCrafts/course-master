import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const course = props.course
    const handleCount = props.handleCount
    // console.log(handleCount)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={course.img} />
        <Card.Body>
          <Card.Title>{course.course_title}</Card.Title>
          <Card.Text>
            <strong>&#2547; {course.price} </strong>
          </Card.Text>
          <Button variant="danger" onClick={()=>{handleCount(course)}}>Enroll now</Button>
        </Card.Body>
      </Card>
    );
};

export default Course;