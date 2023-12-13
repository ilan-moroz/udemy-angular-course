import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['chris', 'anna'];

  // Declaration of the FormGroup for the signup form
  signupForm: FormGroup;

  ngOnInit(): void {
    // Initializing the FormGroup on component initialization
    this.signupForm = new FormGroup({
      // Nested FormGroup for user data
      userData: new FormGroup({
        // FormControl for username with required validator
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        // FormControl for email with required and email validators
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      // FormControl for gender, defaulting to 'male'
      gender: new FormControl('male'),
      // FormArray for dynamic form controls
      hobbies: new FormArray([]),
    });
  }

  onSub() {
    console.log(this.signupForm);
  }

  // Helper method to retrieve the FormControls from the hobbies FormArray
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // Method to add a new FormControl to the hobbies FormArray
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // custom validation
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { nameIsForbidden: true };
    return null;
  }
}
