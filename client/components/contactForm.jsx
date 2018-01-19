import React from 'react'
import FieldGroup from './fieldGroup'
import getValidationState from '../util/contactFormFunctions/getValidationState'
import createEditHandler from '../util/contactFormFunctions/createEditHandler'
import createCheckedHandler from '../util/contactFormFunctions/createCheckedHandler'
import checkValidation from '../util/contactFormFunctions/checkValidation'
import submit from '../util/contactFormFunctions/submit'
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
    this.submit = submit.bind(this);
    this.onEditName = createEditHandler('name', this);
    this.onEditEmail = createEditHandler('email', this);
    this.onEditDescription = createEditHandler('description', this);
    this.onEditWebsite = createCheckedHandler('website', this);
    this.onEditAndroid = createCheckedHandler('android', this);
    this.onEditWindows = createCheckedHandler('windows', this);
    this.onEditOther = createCheckedHandler('other', this);
    this.getValidationState = getValidationState.bind(this);
    this.checkValidation = checkValidation.bind(this);

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
              onClick={(e) => {
                this.submit(this, '/client', e)
              }}
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
