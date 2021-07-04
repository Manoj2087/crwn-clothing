import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handlesubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handlechange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }


  render() {
    return(
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handlechange}
            label='email'
            required 
          />
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handlechange}
            label='password'
            required 
          />
          <CustomButton type='submit'>
            SIGN IN
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;