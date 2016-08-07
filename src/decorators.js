import {inject, NewInstance} from 'aurelia-framework';
import {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from 'aurelia-validatejs';
import {ValidationController} from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class Decorators {
  model;

  constructor(controller) {
    this.controller = controller;
    this.model = new Model();
  }

  submit() {
    var errors = this.controller.validate();
    if (errors.length === 0) {
      alert('Submitted successfully');
    } else {
      alert('Form has errors');
    }
  }
}

class Model {
  @length({ minimum: 5, maximum: 25 }) firstName = 'Luke';
  @required lastName = 'Skywalker';
  // @date lastUpdated = new Date();
  // @datetime lastTimeUpdated = new Date();
  @email email = 'luke@skywalker.net';
  @length({ minimum: 5, maximum: 25 }) password = 'equal';
  @equality('password') confirmPassword = 'equal';
  @inclusion(['blue', 'red']) blueOrRed = 'yellow';
  @exclusion(['male']) gender = 'male';
  @url website = 'http://www.google.com';
  @numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 }) age = 25;
  @format(/\d{5}(-\d{4})?/) zipCode = '12345';
}
