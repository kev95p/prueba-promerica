import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModel } from 'src/app/models/base.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  getAll(): Observable<BaseModel[]>{return new Observable()}
  getOne(id: string): Observable<BaseModel>{return new Observable()}
  save(data: BaseModel): Observable<BaseModel>{return new Observable()}
}
