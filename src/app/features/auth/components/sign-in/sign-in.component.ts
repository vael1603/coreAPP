import { AuthService } from './../../services/auth.service';
import { SharedService } from './../../../../shared/shared.service';
import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in',
  imports: [SharedModule, TranslocoModule, RouterModule, FormsModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  sharedService = inject(SharedService);
  router = inject(Router);

  signInForm!: FormGroup;
  
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
        if(this.signInForm.invalid) return;
    
        const form = this.signInForm.value;
        
        const user: User = {
          email: form.email ?? '',
          password: form.password ?? ''
        }
        
        this.authService.loginUser(user).subscribe(()=>{
            this.sharedService.alert('success', 'authTr.loginSuccess');
            this.router.navigate(['/home'])
        });
  }

}
