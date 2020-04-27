import { Component, OnInit, ElementRef , ViewChild, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { analyzeNgModules } from '@angular/compiler';
import { Post, Encrypt } from '../user.model';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { URLSearchParams } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




interface Mode {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-aes-encrypt',
  templateUrl: './aes-encrypt.component.html',
  styleUrls: ['./aes-encrypt.component.css']
})
export class AesEncryptComponent implements OnInit {
   textMessage:any;  
  msgHideAndShow:boolean=false;

  testdec:string='';
  test:string = '';
  aes: FormGroup;
  enc: Encrypt;
  post: Post;
  age: any;
  found: boolean;



  apiDecrypt = "https://riskcovry.fortelogic.in/partners/7/decrypt.json";
  apiEncrypt = "https://riskcovry.fortelogic.in/partners/7/encrypt.json";

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService, private _http: HttpClient) {
    this.aes = fb.group({

      aese: ["", Validators.required],
      aesd: ["", Validators.required]


    });
  }
  ngOnInit() {
    // return this.dataService.decrypt()
    // .subscribe(data =>this.post = data);



  }

  //CALLING THE DECRYPT API TO DISPLAY THE DECRYPTED STRING 
  decrpyt(textareaName) {
    this.dataService.decrypt(textareaName)
    console.log(textareaName);
    return this._http.post<Post>(this.apiDecrypt, {
      data: textareaName
    }

    ).subscribe(data => this.post = data);


  }
  //CALLING THE ENCRYPT API TO DISPLAY THE ENCRYPTED STRING
  encrypt(textareaencrypt) {
   
    
    this.test="";
    this.dataService.encrypt(textareaencrypt)

    console.log(textareaencrypt);
  

    return this._http.post<Encrypt>(this.apiEncrypt, {
      data: textareaencrypt
    }

    ).subscribe(data => this.enc = data);



  }
  clearenc(){
    this.test="";
  }
  cleardec(){
    this.testdec="";
  }
  textMessageFunc(msgText){  
    this.textMessage=msgText+" Copied to Clipboard";  
    this.msgHideAndShow=true;  
    setTimeout(() => {  
      this.textMessage="";  
      this.msgHideAndShow=false;  
    }, 10000);  
     
  }  
  copy(user , user1 , user2 , user3) {  
    // user5.select();  
    user.select();
    user1.select();
    user2.select();
    user3.select();      
    document.execCommand('copy');  
    // user5.setSelectionRange(0, 0);  
    user.setSelectionRange(0, 0);  
    user1.setSelectionRange(0, 0);
    user2.setSelectionRange(0, 0);
    user3.setSelectionRange(0, 0); 
    this.textMessageFunc('Code');    
      
  }  



  mode: Mode[] = [

    { value: 'ecb', viewValue: 'ECB' },
    { value: 'cbc', viewValue: 'CBC' }


  ];
  //   onFileSelected(event){
  //   console.log(event)
  // }
  prev() {
    this.router.navigate(['sign-in']);
  }

  sso() {
    this.router.navigate(['sso-integrate']);
  }


  // postdecrypt(){
  //    var postData = {
  //     data:"G1/ShPyOHhdxwYbGETHQsw==\n",
  //   };

  //   this._http.post("https://riskcovry.fortelogic.in/partners/7/decrypt.json" , this.postData);
  // }
  // postdecrypt(){

  //     let urlSearchParams = new URLSearchParams();
  //   urlSearchParams.append('data',"G1/ShPyOHhdxwYbGETHQsw==\n");


  //   let body = urlSearchParams.toString()
  //   console.log(body);

  //  return this._http.post("https://riskcovry.fortelogic.in/partners/7/decrypt.json" ,{
  //   data:"G1/ShPyOHhdxwYbGETHQsw==\n"

  // })





}
