import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-assignment',
  templateUrl: './forms-assignment.component.html',
  styleUrls: ['./forms-assignment.component.css'],
})
export class FormsAssignmentComponent implements OnInit {
  form: FormGroup;
  isValid = false;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(null, [
        this.forbiddenProjectName.bind(this),
      ]),
      email: new FormControl(null),
      projectStatus: new FormControl(null),
    });
  }

  onSub() {
    console.log(this.form);
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          this.isValid = false;
          resolve({ projectNameIsForbidden: true });
        } else {
          this.isValid = true;
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
