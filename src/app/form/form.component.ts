import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { FormService } from './form.service';
import { InputComponent } from '../input/input.component';
import { ValidationSectionComponent } from '../validation-section/validation-section.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    InputComponent,
    ReactiveFormsModule,
    ValidationSectionComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [FormService],
})
export class FormComponent {
  public formGroup = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private formService: FormService) {}

  getClass(sectionId: number) {
    return this.formService.getClass(
      this.formGroup.value.password || '',
      sectionId
    );
  }
}
