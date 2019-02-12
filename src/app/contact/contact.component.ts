import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(
    private formBuilder: FormBuilder
    // private formGroup: FormGroup,
    // private validator: Validator
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
