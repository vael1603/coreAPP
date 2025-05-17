import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  const hasntUpperCase = /[A-Z]/.test(value);
  const hasntSpecialChar = /[^A-Za-z0-9]/.test(value);
  const hasntNumber = /\d/.test(value);
  const isntLongEnough = value.length >= 8;

  const valid = hasntUpperCase && hasntSpecialChar && hasntNumber && isntLongEnough;

  return valid ? null : {
    passwordStrength: {
      hasntUpperCase,
      hasntSpecialChar,
      hasntNumber,
      isntLongEnough
    }
  };
}

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
};
