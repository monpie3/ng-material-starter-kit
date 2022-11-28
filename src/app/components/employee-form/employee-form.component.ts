import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    employeeName: new FormControl(),
    employeeSalary: new FormControl(),
    employeeAge: new FormControl()
  });

  constructor(private _employeesService: EmployeesService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeesService.create({
      employeeName: employeeForm.get('employeeName')?.value,
      employeeSalary: employeeForm.get('employeeSalary')?.value,
      employeeAge: employeeForm.get('employeeAge')?.value
    }).subscribe();
  }
}
