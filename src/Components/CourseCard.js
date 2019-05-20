// React Stuff
import React from 'react'
import { withRouter } from 'react-router-dom'

// Semantic UI Stuff
import { Card, Image } from 'semantic-ui-react'

// Redux Stuff
import { connect } from 'react-redux'


// Component Itself
function CourseCard(props) {
  
  const handleClick = () => {
    props.history.push(`/class/${props.course.id}`)
  }

  return (
    <div className="courseCard">
      <Card>
        <Card.Header>{props.course.title}</Card.Header>
        <Image alt='hello there' onClick={handleClick} className="courseCardImage" src={props.course.images[Math.floor(Math.random() * props.course.images.length)].url} wrapped ui={false} />
        <Card.Description>{props.course.short_description}</Card.Description>
      </Card>
    </div>
  )
}

export default connect()(withRouter(CourseCard));