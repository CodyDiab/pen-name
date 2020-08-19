import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignupForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='#f4f1d0' textAlign='center'>
        <Image src='/logo.png' /> Signup to get started
      </Header>
      <Form size='large'>
        <Segment stacked>
            <Form.Input  fluid icon='user' iconPosition='left' placeholder='User name'/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='#f4f1d0' fluid size='large'>
           Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='#'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignupForm