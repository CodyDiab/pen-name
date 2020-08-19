import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='#f4f1d0' textAlign='center'>
        <Image src='../../public/typewriter.png' /> Signup to get started
      </Header>
      <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
            <Form.Input  fluid icon='user' iconPosition='left' placeholder='User name' onChange={handleChange}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={handleChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={handleChange}
          />

          <Button color='#f4f1d0' fluid size='large' type="submit">
           Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to="/login">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  )
}

export default SignupForm