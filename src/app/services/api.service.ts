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

  // getProducts(categoryName: string): Observable<Product[]> {
  //   // return this.firestore.collection<Product>('products').valueChanges();
  //   return this.firestore.collection<Product>('products').snapshotChanges()
  //   .pipe( map(actions => actions.map(res => {
  //     const data = res.payload.doc.data() as Product;
  //     const id = res.payload.doc.id;
  //     return { id, ...data };
  //   })))
  // }

  getProducts(categoryName: string): Observable<Product[]> {
    // return this.firestore.collection<Product>('products').valueChanges();
    if(categoryName){
      return this.firestore.collection<Product>('products', ref => ref.where('categoryName', '==', categoryName)).snapshotChanges()
      .pipe( map(actions => actions.map(res => {
        const data = res.payload.doc.data() as Product;
        const id = res.payload.doc.id;
        return { id, ...data };
      })))
      // return this.firestore.collection<Product>("products", ref => ref.where('categoryName', '==', categoryName)).valueChanges();

    }else {
    return this.firestore.collection<Product>('products').snapshotChanges()
    .pipe( map(actions => actions.map(res => {
      const data = res.payload.doc.data() as Product;
      const id = res.payload.doc.id;
      return { id, ...data };
    })))
    }
  }

  

  getSingleProduct(id: string) {
    return this.firestore.doc<Product>(`products/${id}`).valueChanges();
  }

  getProductsByCategories(){}
}
