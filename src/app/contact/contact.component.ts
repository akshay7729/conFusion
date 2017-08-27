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

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) { 
  		this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
  	this.feedbackForm = this.fb.group({
  		firstname: '',
  		lastname: '',
  		telnum: 0,
  		email: '',
  		message: '' 

  	});
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
