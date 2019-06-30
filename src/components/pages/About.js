import React, { Fragment } from 'react'
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react'
import Navbar from '../layout/Navbar';

const About = () => {

  const handleSubmit = () => {
    alert('This website is only a demo...')
  }
  
  return (
    <Fragment>
    <Navbar />
    <Grid textAlign='center' verticalAlign='middle' style={{height:'100vh'}}>
      <Grid.Column style={{width: '75vw'}}>
        <Header as='h2'>About</Header>
        <p>Every class featured on this site is either a free or a free trial.</p>
        <p>If you would like to have your free class or free trial class featured on this website, please fill out the form below and we will get back to you within 14 business days.</p>
        <Form size='large'>
          <Segment>
            <Form.Input required type='email' fluid icon='mail' iconPosition='left' placeholder='Email Address (required)'/>
            <Form.Input required fluid icon='user' iconPosition='left' placeholder='Your Name (required)'/>
            <Form.Input required fluid icon='question circle' iconPosition='left' placeholder='Class Title (required)'/>
            <Form.Input required fluid icon='question circle outline' iconPosition='left' placeholder='Class Description (required)'/>
            <Form.Input required fluid icon='map marker alternate' iconPosition='left' placeholder='Class Address (required)'/>
            <Form.Input fluid icon='world' iconPosition='left' placeholder='Your Website (optional)'/>
            <Button onClick={handleSubmit}>Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    </Fragment>
  )
}

export default About
