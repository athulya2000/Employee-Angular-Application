import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  name=""
  Designation=""
  Salary=""
  Company=""

  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "Designation":this.Designation,
      "Salary":this.Salary,
      "Company":this.Company
    }
    console.log(data)
  }
}
