import { Component, Input, signal } from '@angular/core';
import { CyberdarkButtonComponent } from '../../shared/components/button/cyberdark-button.component';

@Component({
  selector: 'app-auth',
  imports: [CyberdarkButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isSignInProcessing = signal(false);

  clickSignIn(event: MouseEvent) {
    this.isSignInProcessing.set(true);

    setTimeout(() => {
      this.isSignInProcessing.set(false);
    }, 10000);
  }
}
