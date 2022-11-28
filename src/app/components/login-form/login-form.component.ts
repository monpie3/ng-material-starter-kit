import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginsService} from '../../services/logins.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({username: new FormControl(), password: new FormControl()});

  constructor(private _loginsService: LoginsService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginsService.login({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value
    }).subscribe();
  }
}
