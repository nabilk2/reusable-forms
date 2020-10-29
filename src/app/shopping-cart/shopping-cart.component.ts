import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  checkoutForm: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.checkoutForm = this._fb.group({
      address: ['2440 Winston Park Drive', Validators.required],
      city: ['Oakville', Validators.required],
      postalCode: ['L6H 7V2', Validators.required],
      useShippingAddress: true,
      personalInfo: this._fb.group({
        firstName: '',
        lastName: '',
        email: ['', Validators.email]
      })
    });
  }

  addBillingAddress(useShippingAddress: boolean) {
    !useShippingAddress ?
      this.checkoutForm.addControl('billingAddress', this._fb.group({
        address: '',
        city: '',
        postalCode: ''
      }))
      :
      this.checkoutForm.removeControl('billingAddress');

  }
}
