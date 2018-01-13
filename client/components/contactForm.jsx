import React from 'react'
import FieldGroup from './fieldGroup'
import {
  Button,
  FormGroup,
  ControlLabel,
  Checkbox,
  Jumbotron,

} from 'react-bootstrap'

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.onEditName = this.createEditHandler('name');
    this.onEditEmail = this.createEditHandler('email');
    this.onEditWebsite = this.createCheckedHandler('website');
    this.onEditAndroid = this.createCheckedHandler('android');
    this.onEditWindows = this.createCheckedHandler('windows');
    this.onEditOther = this.createCheckedHandler('other');
    this.onEditDescription = this.createEditHandler('description');
    this.getValidationState = this.getValidationState.bind(this);
    this.checkValidation = this.checkValidation.bind(this);

    this.state = {
      name: "",
      email: "",
      website: false,
      android: false,
      windows: false,
      other: false,
      description: ""
    }
  }

  submit(){
    console.log(this.state);
  }

  createEditHandler(fieldName){
    return (e) => {
      this.setState({[fieldName]: e.target.value});
    }
  }

  createCheckedHandler(fieldName){
    return (e) => {
      this.setState({[fieldName]: e.target.checked})
    }
  }

  checkValidation(vs){
    for (var key in vs){
      if (vs[key].state!='success') {
        return false
      }
    }
    return true
  }

  getValidationState(){
    const fieldValidators = {
      name: {
        isValid: (val) => {
          return val.match(/\w+ \w/)
        },
        errorMessage: 'Please enter your first and last name.'
      },
      email: {
        isValid: (val) => {
          return val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        },
        errorMessage: 'Must be a valid email address (this will be used to contact you)'
      },
      checkbox: {
        isValid: (val) => {
          return this.state.website == true ||
                 this.state.android == true ||
                 this.state.windows == true ||
                 this.state.other == true;
        },
        errorMessage: 'Please choose at least one option.'
      },
      description: {
        isValid: (val) => {
          return val.length > 20
        },
        errorMessage: 'Please try to give as much detail as possible, so I may better assist you.'
      }
    }

    const validationStates = {};

    Object.keys(fieldValidators).forEach((field) => {
      const validator = fieldValidators[field];
      const value = this.state[field];

      if (validator.isValid(value)) {
        validationStates[field] = { state: 'success' }
      }

      else if (!value) {
        validationStates[field] = { state: null }
      }

      else {
        validationStates[field] = { state: 'error', help: validator.errorMessage }
      }
    });

    return validationStates
  }


  render () {
    const validationStates = this.getValidationState();
    return (
      <div className="contactForm-div">
        <Jumbotron>
          <form>
            <FieldGroup
              id='fg1'
              type='text'
              label='Name'
              placeholder='Your Name'
              value={this.state.name}
              onChange={this.onEditName}
              validationState={validationStates.name.state}
              help={validationStates.name.help}
              />

            <FieldGroup
              id='fg2'
              type='text'
              label='Email'
              placeholder='Your Email'
              value={this.state.email}
              onChange={this.onEditEmail}
              validationState={validationStates.email.state}
              help={validationStates.email.help}
              />

            <FormGroup>
              <ControlLabel>What type of project would you like? (Check all that apply)</ControlLabel>
              <div>
                <Checkbox validationState={validationStates.checkbox.state} defaultChecked={this.state.website} onChange={this.onEditWebsite}> Website </Checkbox>
                <Checkbox validationState={validationStates.checkbox.state} defaultChecked={this.state.android} onChange={this.onEditAndroid}> Android App </Checkbox>
                <Checkbox validationState={validationStates.checkbox.state} defaultChecked={this.state.windows} onChange={this.onEditWindows}> Windows App </Checkbox>
                <Checkbox validationState={validationStates.checkbox.state} defaultChecked={this.state.other} onChange={this.onEditOther}> Other </Checkbox>
              </div>
            </FormGroup>

            <FieldGroup
              id='fg2'
              componentClass="textarea"
              label="Project Overview"
              placeholder="What can I do to help?"
              value={this.state.description}
              onChange={this.onEditDescription}
              validationState={validationStates.description.state}
              help={validationStates.description.help}
            />

            <Button
              bsStyle='success'
              onClick={this.submit}
              disabled={!this.checkValidation(validationStates)}
              >
              Submit
            </Button>
          </form>
        </Jumbotron>
      </div>
    )
  }
}


export default ContactForm
