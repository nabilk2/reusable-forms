import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PersonalInfoComponent } from './shared/forms/personal-info/personal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShippingAddressComponent } from './shared/forms/shipping-address/shipping-address.component';
import { HomeComponent } from './home/home.component';
import { NxModule } from './nx/nx.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ShoppingCartComponent,
    PersonalInfoComponent,
    ShippingAddressComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
