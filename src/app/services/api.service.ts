import { Product } from './../components/products/product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges();
  }
}
