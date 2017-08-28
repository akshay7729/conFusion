import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm:FormGroup;
  feedback:Feedback;
  contactType = ContactType;
  formErrors= {
    'firstname' : '',
    'lastname' : '',
    'telnum' : 0,
    'email' : ''
  };

  validationMessages= {
    'firstname': {
      'required' : 'First Name is required',
      'minlength' : 'First Name must be atlest 4 characters log',
      'maxlength' : 'First Name cannot be more than 10 characters'
    },

    'lastname': {
      'required' : 'Last Name is required',
      'minlength' : 'Last Name must be atlest 5 characters log',
      'maxlength' : 'Last Name cannot be more than 12 characters'
    },

    'email': {
      'required' : 'Email is required',
      'email' : 'Email is not in valid format'
    },

    'telnum': {
      'required' : 'Phone number is required'
    },
  }

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) { 
  		this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
  	this.feedbackForm = this.fb.group({
  		firstname: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
  		lastname: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
  		telnum: [0,Validators.required],
  		email: ['',Validators.required, Validators.email],
  		message: '' 

  	});

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  // ? -> paramater is optional
  onValueChanged(data?: any) {
    if(!this.feedbackForm){ return; }
    const form = this.feedbackForm;
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum:0,
      email: '',
      message: '' 
    });
  }

}
