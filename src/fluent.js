import {inject, NewInstance} from 'aurelia-framework';
import {ValidationController} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController))
export class Fluent {
  model;
  constructor(controller) {
    this.controller = controller;
    this.model = new Model();
    
    ValidationRules
      .ensure('firstName')
        .required()
        .length({minimum: 3, maximum: 10})
      .ensure('lastName')
        .required()
      .ensure('email')
        .email()
      .ensure('password')
        .length({ minimum: 5, maximum: 25 })
      .ensure('confirmPassword')
        .equality('password')
      .ensure('blueOrRed')
        .inclusion(['blue', 'red'])
      .ensure('gender')
        .exclusion(['male'])
      .ensure('website')
        .url()
      .ensure('age')
        .numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 })
      .ensure('zipCode')
        .format(/\d{5}(-\d{4})?/)
      .on(this.model);
  }

  validate() {
    var errors = this.controller.validate();
    if (errors.length === 0) {
      alert('Submitted successfully');
    } else {
      alert('Form has errors');
    }
  }
}

class Model {
  firstName = 'Luke';
  lastName = 'Skywalker';
  email = 'luke@skywalker.net';
  password = 'equal';
  confirmPassword = 'equal';
  blueOrRed = 'yellow';
  gender = 'male';
  website = 'http://www.google.com';
  age = 25;
  zipCode = '12345';
}
