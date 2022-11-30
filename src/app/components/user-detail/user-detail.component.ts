import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';
import {UserModel} from "../../models/user.model";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
    readonly userDetail$: Observable<UserModel> = this._activatedRoute.params.pipe(
        switchMap(data => this._usersService.getOne(data['id'])));

    constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute) {
    }
}
