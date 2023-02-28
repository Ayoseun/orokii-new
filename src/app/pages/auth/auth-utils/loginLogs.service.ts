import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {LoginLogs} from '../../../models/login-logs.model';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginLogsService {
  private dbPath = '/login_logs';

  LoginLogsRef: AngularFirestoreCollection<LoginLogs>;

  constructor(private db: AngularFirestore,private http:HttpClient) {
    this.LoginLogsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<LoginLogs> {
  
    return this.db.collection('/login_logs', r => r
          .orderBy('date_time', 'desc').limit(10));
  }

  
  create(loginLogs: LoginLogs): any {
    return this.LoginLogsRef.add({ ...loginLogs });
  }

  public getIPAddress()  
  {  
    return this.http.get("https://api.ipify.org/?format=json");  
  }

  
}
