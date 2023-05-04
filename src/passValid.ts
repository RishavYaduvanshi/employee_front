import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    const hasLength = value && value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasSymbol = /[!@#$%^&*]/.test(value);
    console.log(value);

    var length= true;
    var uppercase= true;
    var symbol= true;
    
    if (!hasLength) {
      console.log(hasLength,"hasLength");
      length = false;
    }
    if(!hasUppercase){
      console.log(hasUppercase,"hasUppercase");
      uppercase = false;
    }
    if(!hasSymbol){
      console.log(hasSymbol,"hasSymbol");
      symbol = false;
    }

    return {
      length : length,
      uppercase : uppercase,
      symbol : symbol
    }

  };
}