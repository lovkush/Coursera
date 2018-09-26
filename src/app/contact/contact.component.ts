import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formErrors = {
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':''
  };

  validationMessage = {
    'firstname':{
      'required':'First Name is Required.',
      'minlength':'First Name must be atleast 2 character long.',
      'maxlength':'First Name cannot be more than 25 characters long.',
    },
    
    'lastname':{
      'required':'Last Name is required',
      'minlength':'Last Name must be atleast 2 character long.',
      'maxlength':'Last Name cannot be more than 25 character long.'
    },

    'telnum':{
      'required':'Telephone Number is required.',
      'pattern':'Telephone Number contains only numbers.',
    },
    
    'email':{
      'required':'Email is required.',
      'email':'Email is not in valid form.'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  onValueChanged(data?:any){
    if(!this.feedbackForm) {return;}
    const form=this.feedbackForm;

    for(const field in this.formErrors){
      this.formErrors[field]='';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessage[field];
        for (const key in control.errors){
          this.formErrors[field]+= messages[key] + ' ';
        }
      }
    }
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
    .subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
  }

  

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset();
    console.log(this.feedback);
   
  }

}