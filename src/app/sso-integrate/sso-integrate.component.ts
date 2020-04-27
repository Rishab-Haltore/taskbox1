import { Component, OnInit ,ViewChild , ElementRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PageScrollService } from 'ngx-page-scroll-core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sso-integrate',
  templateUrl: './sso-integrate.component.html',
  styleUrls: ['./sso-integrate.component.css']
})
export class SsoIntegrateComponent implements OnInit {
  // @ViewChild('cpy') cpy: ElementRef;
  textMessage:any;  
  msgHideAndShow:boolean=false;
  users: User;

  constructor(private router: Router, private dataService: DataService, pageScrollService: PageScrollService) { }
  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe((data: any) => this.users = data);
  }

  form2: FormGroup;

  java() {
    var java = document.getElementById("java-snippet");
    if (java.style.display === "none") {
      java.style.display = "block";
    } else {
      java.style.display = "none";
    }
  }
  python() {
    var python = document.getElementById("python-snippet");
    if (python.style.display === "none") {
      python.style.display = "block";
    } else {
      python.style.display = "none";
    }
  }
  ruby() {
    var ruby = document.getElementById("ruby-snippet");
    if (ruby.style.display === "none") {
      ruby.style.display = "block";
    } else {
      ruby.style.display = "none";
    }
  }
  php() {
    var php = document.getElementById("php-snippet");
    if (php.style.display === "none") {
      php.style.display = "block";
    } else {
      php.style.display = "none";
    }
  }
  c() {
    var c = document.getElementById("c-snippet");
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  }
  cpp() {
    var cpp = document.getElementById("cpp-snippet");
    if (cpp.style.display === "none") {
      cpp.style.display = "block";
    } else {
      cpp.style.display = "none";
    }
  }
  textMessageFunc(msgText){  
    this.textMessage=msgText+" Copied to Clipboard";  
    this.msgHideAndShow=true;  
    setTimeout(() => {  
      this.textMessage="";  
      this.msgHideAndShow=false;  
    }, 10000);  
     
  }  
  copy(userinput , user , user1 , user2 , user3) {  
    userinput.select();  
    user.select();
    user1.select();
    user2.select();
    user3.select();      
    document.execCommand('copy');  
    userinput.setSelectionRange(0, 0);  
    user.setSelectionRange(0, 0);  
    user1.setSelectionRange(0, 0);
    user2.setSelectionRange(0, 0);
    user3.setSelectionRange(0, 0); 
    this.textMessageFunc('Code');    
      
  }  

  prev() {
    this.router.navigate(['sign-in']);
  }

  aes() {
    this.router.navigate(['aes-encrypt']);
  }

}
