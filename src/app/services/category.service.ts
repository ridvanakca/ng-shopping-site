import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  

  constructor(private firestore: AngularFirestore) { }

  getCategories(): Observable<Category[]> {
    return this.firestore.collection<Category>('categories').valueChanges();
  }
}
