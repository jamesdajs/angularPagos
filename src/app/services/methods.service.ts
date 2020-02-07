import { Injectable } from '@angular/core';

import { AngularFirestore  } from '@angular/fire/firestore';
import {map} from 'rxjs/operators'
export interface user {
  id:string 
  nombre:string
}
@Injectable({
  providedIn: 'root'
})

export class MethodsService {

  constructor(
    private fire:AngularFirestore
  ) { }
  recuperadatos() {
    return this.fire.collection('user').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as user;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
}
