import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
import {MatModule} from "../shared/mat/mat.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatModule
  ]
})
export class CoreModule {
}
