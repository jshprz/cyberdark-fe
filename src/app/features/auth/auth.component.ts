import { Component, OnInit, signal } from '@angular/core';
import { CyberdarkButtonComponent } from '../../shared/components/button/cyberdark-button.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

interface ISignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-auth',
  imports: [CyberdarkButtonComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  signInForm!: FormGroup<ISignInForm>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isSignInProcessing = signal(false);

  get signInFormControl() {
    return this.signInForm.controls;
  }

  onSubmit() {
    this.isSignInProcessing.set(true);

    setTimeout(() => {
      this.isSignInProcessing.set(false);
    }, 5000);
  }
}
