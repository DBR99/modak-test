import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderConfirmationComponent} from "./core/order-confirmation/order-confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: OrderConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
