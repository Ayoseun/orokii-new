import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Manage2fa from '../../../models/manage2fa.model';

@Injectable({
  providedIn: 'root'
})
export class Manage2faService {
  private dbPath = '/manage2fa';

  manage2faRef: AngularFirestoreCollection<Manage2fa>;

  constructor(private db: AngularFirestore) {
    this.manage2faRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Manage2fa> {
    return this.manage2faRef;
  }

  getRegister(id:any): AngularFirestoreCollection<Manage2fa> {

    return this.db.collection('/manage2fa', ref => ref.where('uid', '==', id));
  }

  create(manage2fa: Manage2fa): any {
    return this.manage2faRef.add({ ...manage2fa });
  }

  update(id: string, data: any): Promise<void> {
    return this.manage2faRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.manage2faRef.doc(id).delete();
  }
}
