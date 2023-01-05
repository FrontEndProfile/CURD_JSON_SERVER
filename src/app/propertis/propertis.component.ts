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

  allProperty:any;
  formValue!:FormGroup;

  propertyModelObj:property = new property()

  showAdd!:boolean;
  showEdit!:boolean;

  constructor(private fb:FormBuilder,private api:PropertyService){}

  ngOnInit(){
    this.getAllProperty()

    this.formValue = this.fb.group({
      ptitle:[''],
      pprice:[''],
      plocation:[''],
      pdetails:['']
    })
  }
  // CLICK FUNCTION LOGIC 
  clickAddProp(){
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit =false;
  }
  // GET Method All Display From Services Files Data from local--json-server
  getAllProperty(){
    this.api.getAllProp().subscribe((res)=>{
      this.allProperty = res
      // console.log(this.allProperty);
    })
  }
  // ADD Property
  addProp(){
    this.propertyModelObj.ptitle = this.formValue.value.ptitle;
    this.propertyModelObj.pprice = this.formValue.value.pprice;
    this.propertyModelObj.plocation = this.formValue.value.plocation;
    this.propertyModelObj.pdetails = this.formValue.value.pdetails;
    console.log(this.propertyModelObj);
    
    this.api.addListing(this.propertyModelObj).subscribe((res)=>{
      console.log(res);
      alert('SuccessFull Add Data');
      let ref =document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProperty();
    },err=>{
      alert('Not Work Method')
    })
  }

  // Delete Data property 
  deleteProp(data:any){
    this.api.deleteProp(data.id).subscribe((res)=>{
      alert('data Delete');
      this.getAllProperty();
    })
  }
}
