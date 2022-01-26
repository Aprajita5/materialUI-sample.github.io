import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentList: AngularFireList<any>;
  array = [];
  constructor(private firebse: AngularFireDatabase) {
    this.departmentList = this.firebse.list('departments');
    this.departmentList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item=> {
          return {
            $key: item,
              ...item.payload.val()
          }
        })
      }
    )
   }
}
