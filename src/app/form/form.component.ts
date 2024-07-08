import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  inputValue: string = '';

  getClass(sectionId: number) {
    if (this.inputValue.length > 0 && this.inputValue.length < 8) {
      return 'bg-red-500';
    }

    if (this.inputValue.length === 0) {
      return 'bg-slate-400';
    }

    const regex = [
      /[^\w\s\p{L}]/u.test(this.inputValue),
      /\d/.test(this.inputValue),
      /[a-zA-Zа-яА-Я]/.test(this.inputValue),
    ];

    const countRegex = regex.filter((reg) => reg === true).length;

    if (countRegex === 1) {
      if (sectionId === 1) return 'bg-red-500';
    } else if (countRegex === 2) {
      if (sectionId !== 3) return 'bg-yellow-500';
    } else if (countRegex === 3) {
      return 'bg-green-500';
    }
    return 'bg-slate-400';
  }
}
