import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebse: AngularFireDatabase, public matSnackbar: MatSnackBar) { }
  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  })

  getEmployees(){
    this.employeeList = this.firebse.list('employees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee){
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      module: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    })
  }

  updateEmployee(employee){
    this.employeeList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      module: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }

  success(msg){
    this.matSnackbar.open(msg, '');
  }
}
