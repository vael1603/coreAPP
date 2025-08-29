import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'forgot-password',
  imports: [TranslocoModule, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  standalone: true
})
export class ForgotPasswordComponent {

  private authService = inject(AuthService);
  fb = inject(FormBuilder);

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });


  sentEmail(){
    console.log('test')
    this.authService.forgetPassword('elias.ariel.valenzuela@gmail.com').subscribe((r)=>{
      console.log(r)
    })
  }
}
