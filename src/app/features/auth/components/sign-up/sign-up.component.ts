import { SharedService } from './../../../../shared/shared.service';
import { CommonModule } from '@angular/common';
import { User } from './../../models/user';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from '../../services/auth.service';
import { passwordMatchValidator, passwordValidator } from '../../utils/passwordValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  authService = inject(AuthService);
  SharedService = inject(SharedService);
  router = inject(Router)
  fb = inject(FormBuilder);

  constructor(){

  }

  
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]],
    confirmPassword: ['', Validators.required],
    name: [''],
    lastname: ['']
  }, { validators: passwordMatchValidator });



  
  onSubmit() {
    if(this.signUpForm.invalid) return;

    const form = this.signUpForm.value;
    
    const user: User = {
      email: form.email ?? '',
      password: form.password ?? '',
      name: form.name ?? '',
      lastname: form.lastname ?? '',
    }
    
    this.authService.createNewUser(user).subscribe(()=>{
        this.SharedService.alert('success', 'authTr.signUpSuccess');
        this.router.navigate(['/signin'])
    });
  }

  getClassStyle(error: string) {
    const isCorrect = this.isPasswordCorrect(error);
    return !isCorrect ? 'text-error' : 'text-ok'; 
  }

  isPasswordCorrect(error: string) {
     const isEmpty = this.signUpForm.get('password')?.errors?.['required'];
     const hasErrors = this.signUpForm.get('password')?.errors?.['passwordStrength'];
     if(!hasErrors) {
      return !isEmpty && !hasErrors;
     } else {
      return hasErrors[error];
     }
  }

  get arePasswordEqual(){
    return this.signUpForm?.errors?.['passwordMismatch'] ? 'text-error' : 'text-ok';
  }

}
