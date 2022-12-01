import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgePredictorsService } from '../../services/age-predictors.service';
import {AgePredictorModel} from "../../models/age-predictor.model";

@Component({
  selector: 'app-age-predictor',
  templateUrl: './age-predictor.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictorComponent {
  readonly prediction$: Observable<AgePredictorModel> = this._activatedRoute.params.pipe(
      switchMap(data => this._agePredictorsService.predictAge(data["name"])));

  constructor(private _activatedRoute: ActivatedRoute, private _agePredictorsService: AgePredictorsService) {
  }
}
