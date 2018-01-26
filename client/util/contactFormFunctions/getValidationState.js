export default function getValidationState(){
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
