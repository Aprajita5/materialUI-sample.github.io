import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public emplyeeService: EmployeeService, public router: Router) {
   }

  //  dataSource = ELEMENT_DATA;dataSourse;
   listData: MatTableDataSource<any>;
   displayColumns: string[] = ['email', 'FullName', 'mobile', 'city', 'actions'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator; 
   searchKey: string;  

  ngOnInit() {
    this.emplyeeService.getEmployees().subscribe(
      list =>{
        let array  = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  serachKeyFilter(){
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  btnClick() {
    this.router.navigateByUrl("/emplyee-detail");
  }

}
