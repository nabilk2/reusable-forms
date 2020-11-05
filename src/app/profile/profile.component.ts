import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.userForm = this._fb.group({
      firstName: 'Nabil',
      lastName: 'Khan',
      email: ['', Validators.email],
      age: ['', [Validators.min(18), Validators.required]]
    })
  }

  ngOnInit(): void {
    this.userForm.get('age').statusChanges.subscribe(console.log);
  }

}
