import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.checkoutForm = this._fb.group({
      address: ['2440 Winston Park Drive', Validators.required],
      city: ['Oakville', Validators.required],
      postalCode: ['L6H 7V2', Validators.required],
      personalInfo: this._fb.group({
        firstName: '',
        lastName: '',
        email: ['', Validators.email]
      })
    })
  }

  ngOnInit(): void {
  }

}
