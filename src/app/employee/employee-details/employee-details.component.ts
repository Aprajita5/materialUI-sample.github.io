import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public emplyeeService: EmployeeService, public departmentService: DepartmentService, public router: Router) { }
  
  ngOnInit(): void {
    this.emplyeeService.getEmployees();
  }

  onSubmit(){
    if(this.emplyeeService.form.valid){
      // console.log('test', this.emplyeeService.form.value);
      this.emplyeeService.insertEmployee(this.emplyeeService.form.value);
      this.emplyeeService.success(':: Submitted Successfully');
      this.router.navigate(["/emplyeelist"])
    }
  }

}
