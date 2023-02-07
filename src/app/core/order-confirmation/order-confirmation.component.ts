import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  personalInfo: FormGroup;
  addressInfo: FormGroup;
  dateObj: Date = new Date();
  submittedPersonalInfo = false;
  submittedAddressInfo = false;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {
    this.personalInfo = this._formBuilder.group(
      {
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
        id: ['', [Validators.required, Validators.minLength(3)]]
      }
    )
    this.addressInfo = this._formBuilder.group({
      address: ['', Validators.required],
    });
  }

  get personalInfoForm() {
    return this.personalInfo.controls;
  }

  get addressInfoForm() {
    return this.addressInfo.controls;
  }

  submitPersonalInfo() {
    this.submittedPersonalInfo = true;
  }

  confirm() {
    this.submittedAddressInfo = true;
    confirm(`to continue, please validate your information:
     - Date of Birth: ${this.convertToLocaleDateString(new Date(this.personalInfoForm['dateOfBirth']?.value))}
     - gender: ${this.personalInfoForm['gender']?.value}
     - ID Number: ${this.personalInfoForm['id']?.value}
     - Address: ${this.addressInfoForm['address']?.value}
     `);
  }

  reset() {
    this.personalInfo.reset()
    this.addressInfo.reset()
  }

  convertToLocaleDateString(date: Date) {
    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return date.toLocaleDateString(undefined, options)
  }
}
