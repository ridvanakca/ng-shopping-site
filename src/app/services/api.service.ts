import { Product } from '../product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    // return this.firestore.collection<Product>('products').valueChanges();
    return this.firestore.collection<Product>('products').snapshotChanges()
    .pipe( map(actions => actions.map(res => {
      const data = res.payload.doc.data() as Product;
      const id = res.payload.doc.id;
      return { id, ...data };
    })))
  }

  getSingleProduct(id: string) {
    return this.firestore.doc<Product>(`products/${id}`).valueChanges();
  }
}
