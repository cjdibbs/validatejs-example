import {inject, NewInstance} from 'aurelia-framework';
import {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from 'aurelia-validatejs';
import {ValidationController} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController))
export class Master {
    constructor(controller) {
        this.controller = controller;
    }

    @required name;
    @required @email email;

    children = [ new Child("Empire", 5) ];

    addMovie() {
        this.children.push(new Child());
    }

    validate() {
        debugger;
        var errors = this.controller.validate();
        if (errors.length === 0) {
            alert('Submitted successfully');
        } else {
            alert('Form has errors');
        }
    }
}

class Child {
    title;
    raiting;

    constructor(title, rating) {
        this.title = title;
        this.raiting = rating;
    }
}

// You can use the Fluent syntax not class as well as an instance 
ValidationRules
    .ensure('title')
        .required()
    .ensure('raiting')
        .required()
        .numericality({ onlyInteger: true, lessThan: 6, greaterThan: 0 })
    .on(Child);