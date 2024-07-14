import { Injectable } from '@angular/core';
import { evaluateRegex } from './form.utils';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  private defaultClass = ' transition-all';

  getClass(inputValue: string, sectionId: number) {
    if (inputValue.length > 0 && inputValue.length < 8) {
      return 'bg-red-500' + this.defaultClass;
    }

    if (inputValue.length === 0) {
      return 'bg-slate-400' + this.defaultClass;
    }

    const regex = evaluateRegex(inputValue);
    const countRegex = regex.filter((reg) => reg === true).length;

    if (countRegex === 1) {
      if (sectionId === 1) return 'bg-red-500' + this.defaultClass;
    } else if (countRegex === 2) {
      if (sectionId !== 3) return 'bg-yellow-500' + this.defaultClass;
    } else if (countRegex === 3) {
      return 'bg-green-500' + this.defaultClass;
    }
    return 'bg-slate-400' + this.defaultClass;
  }
}
