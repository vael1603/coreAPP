import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sign-in',
  imports: [SharedModule, TranslocoModule, RouterModule, FormsModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  
  formBuilder = inject(FormBuilder);
  signInform!: FormGroup;

  ngOnInit() {
    this.signInform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(event: Event) {
    console.log('Form submitted', this.signInform.value, event);
    throw new Error('Method not implemented.');
  }

}
