import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-sign-up',
  imports: [TranslocoModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  fb = inject(FormBuilder);
  signUpForm = this.fb.group({
    email: [''],
    password: [''],
    confirmPassword: ['']
  });

  onSubmit(event: Event) {
    return this.signUpForm.value;
  }
}
