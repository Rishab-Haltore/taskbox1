import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Post, Encrypt } from './user.model';
import { AesEncryptComponent } from './aes-encrypt/aes-encrypt.component';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {




  data: string;



  apiUrl = "https://riskcovry.fortelogic.in/partners/7.json";
  apiDecrypt = "https://riskcovry.fortelogic.in/partners/7/decrypt.json";
  apiEncrypt = "https://riskcovry.fortelogic.in/partners/7/encrypt.json";

  constructor(private _http: HttpClient) {

  }



  getUsers() {

    return this._http.get<User>(this.apiUrl);
  }


  decrypt(textareaName) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post<Post>(this.apiDecrypt, {
      data: textareaName
    }
    )
  }
  encrypt(textareaencrypt) {
    return this._http.post<Encrypt[]>(this.apiEncrypt, {
      data: textareaencrypt
    })
  }

}

