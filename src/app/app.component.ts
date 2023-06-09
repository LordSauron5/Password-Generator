import { Component } from '@angular/core';
import * as bulmaToast from 'bulma-toast'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

  }

  onButtonClick() {
    const numbers = '123456677890';
    const letters = 'abcdefghijglmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let index = 0; index < this.length; index++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

    bulmaToast.toast({
      message: 'New password generated',
      position: 'top-right',
      type: 'is-success',
      duration: 2000,
      animate: { in: 'fadeIn', out: 'fadeOut' }
    })
  } 

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  copyToClipboard() {
    const copyText = document.createElement('textarea');
    copyText.value = this.password;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);

    bulmaToast.toast({
      message: 'Password Copied',
      position: 'top-right',
      type: 'is-success',
      duration: 2000,
      animate: { in: 'fadeIn', out: 'fadeOut' }
    })
  }

}
