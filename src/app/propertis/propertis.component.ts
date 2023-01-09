import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { property } from './properties.model';

@Component({
  selector: 'app-propertis',
  templateUrl: './propertis.component.html',
  styleUrls: ['./propertis.component.scss']
})

export class PropertisComponent {

  allProperty: any;
  formValue!: FormGroup;

  propertyModelObj: property = new property()

  showAdd!: boolean;
  showEdit!: boolean;
  updateAdd!: boolean;
  constructor(private fb: FormBuilder, private api: PropertyService) { }

  ngOnInit() {
    this.getAllProperty()

    this.formValue = this.fb.group({
      ptitle: [''],
      pprice: [''],
      plocation: [''],
      pdetails: [''],
      pid: ['']
    })
  }
  // CLICK FUNCTION LOGIC 
  clickAddProp() {
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
    this.updateAdd = true
  }

  // GET Method All Display From Services Files Data from local--json-server
  getAllProperty() {
    this.api.getAllProp().subscribe((res) => {
      this.allProperty = res
      // console.log(this.allProperty);
      this.viewBtn = res

    })
  }
  // ADD Property
  addProp() {
    this.propertyModelObj.ptitle = this.formValue.value.ptitle;
    this.propertyModelObj.pprice = this.formValue.value.pprice;
    this.propertyModelObj.plocation = this.formValue.value.plocation;
    this.propertyModelObj.pdetails = this.formValue.value.pdetails;
    console.log(this.propertyModelObj);

    this.api.addListing(this.propertyModelObj).subscribe((res) => {
      console.log(res);
      alert('SuccessFull Add Data');
      let ref = document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProperty();
    }, err => {
      alert('Not Work Method')
    })
  }

  // Delete Data property 
  deleteProp(data: any) {
    this.api.deleteProp(data.id).subscribe((res) => {
      alert('data Delete');
      this.getAllProperty();
    })
  }

  // Edit&&Update Content 
  // updateProp(data:any , id?:any){
  //   this.formValue.patchValue({
  //     ptitle: data.ptitle,
  //     pprice: data.pprice,
  //     plocation: data.plocation,
  //     pdetails: data.pdetails
  //   })

  //   // this.formValue.value.pprice =  data.pprice;
  //   // this.formValue.value.plocation  = data.plocation;
  //   // this.formValue.value.pdetails = data.pdetails ;
  //   console.log(data.ptitle);
  //   // console.log(this.propertyModelObj);

  //   this.api.updateProp(this.propertyModelObj,data).subscribe((res)=>{
  //     // console.log(res);
  //     // alert(res);
  //     this.getAllProperty()
  //   },err=>{
  //     alert('Not Work Method')
  //   })
  // }
  //-------------
  // updateProps() {
  //   this.showEdit = false;
  //   this.updateAdd = true
  // }
  updateProp(data: any) {
    // debugger
    let body = {
      ptitle: data.ptitle,
      pprice: data.pprice,
      plocation: data.plocation,
      pdetails: data.pdetails,
    }

    // getId =

    this.api.updateProp(body, data.id)
      .subscribe((res) => {
        this.getAllProperty();
        this.formValue.patchValue({
          ptitle: data.ptitle,
          pprice: data.pprice,
          plocation: data.plocation,
          pdetails: data.pdetails,
          pid: data.id
        })
        // console.log(res)
        // console.log(res.id);
      }

      )
    // alert('DATA UPDATED');
  }



  updatePropadd() {
    this.propertyModelObj.ptitle = this.formValue.value.ptitle;
    this.propertyModelObj.pprice = this.formValue.value.pprice;
    this.propertyModelObj.plocation = this.formValue.value.plocation;
    this.propertyModelObj.pdetails = this.formValue.value.pdetails;
    this.propertyModelObj.id = this.formValue.value.pid;

    this.api.updatePropaddapi(this.propertyModelObj).subscribe((res) => {
      console.log(res);
      alert('SuccessFull Add Update');
    })
  }
  viewBtn() {
    console.log(this.getAllProperty);
  }




}
