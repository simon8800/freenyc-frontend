// React Stuff
import React from 'react'

// Semantic UI Stuff
import { Card, Image } from 'semantic-ui-react'

// Redux Stuff
import { connect } from 'react-redux'

// Component Itself
function CourseCard({ course }) {
  return (
    <div className="courseCard">
      <Card>
        <Card.Header>{course.title}</Card.Header>
        <Image onClick={console.log} className="courseCardImage" src={course.images[Math.floor(Math.random() * course.images.length)].url} wrapped ui={false} />
        <Card.Description>{course.description}</Card.Description>
      </Card>
    </div>
  )
}



export default connect()(CourseCard);