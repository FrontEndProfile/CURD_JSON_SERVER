import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  //  Add Get,Post,Put and Delete Method

  // POST
  addListing(data: any) {
    return this.http.post('http://localhost:3000/properties', data).pipe(map((res: any) => {
      return res
    }))
  }
  // GET
  getAllProp(data?:any) {
    return this.http.get('http://localhost:3000/properties', data).pipe(map((res: any) => {
      return res
    }))
  }
  // Update
  updateProp(data: any,id: string): Observable<any> {
    return this.http.get('http://localhost:3000/properties/'+ id, data)
  }

  updatePropaddapi(data: any): Observable<any> {
    return this.http.put('http://localhost:3000/properties/'+ data.id, data)
  }
  // updateData(data: any, id: string): Observable<any> {
  //   return this.http.patch(`${this.baseURL}/update/${id}`, data)
  // }
  // Delete
  deleteProp(id:number) {
    return this.http.delete('http://localhost:3000/properties/'+ id).pipe(map((res: any) => {
      return res
    }))
  }


}
