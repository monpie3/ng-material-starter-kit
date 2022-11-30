import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DogPictureModel } from '../../models/dog-picture.model';
import { DogPictureService } from '../../services/dog-picture.service';

@Component({
  selector: 'app-dog-picture',
  templateUrl: './dog-picture.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogPictureComponent {
  readonly dogPicture$: Observable<DogPictureModel> = this._dogPictureService.getPicture();

  constructor(private _dogPictureService: DogPictureService) {
  }
}
