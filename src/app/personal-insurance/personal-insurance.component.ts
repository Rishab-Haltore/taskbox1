import { Component, OnInit , HostBinding} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup , FormBuilder , FormControl , Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var $: any;
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  
} from '@angular/animations';


@Component({
  selector: 'app-personal-insurance',
  templateUrl: './personal-insurance.component.html',
  styleUrls: ['./personal-insurance.component.css'],
  // animations:[
  //   trigger('fade', [
  //     state('void',style({
  //       transform:'rotateY(180deg) rotateZ(90deg)'
  //     })),
  //    transition('void => *',[
  //      style({ opacity:0}),
  //      animate(2000)
  //    ]),
    
 
  //   ]),
  //   trigger('second', [
  //     state('void',style({
  //       opacity:0
  //     })),
  //    transition('void => *',[
  
  //      animate(3000)
  //    ]),
  //   ]),
  //   trigger('third', [
  //     state('void',style({
  //      opacity:0
  //     })),
  //    transition('void => *',[

  //      animate(4000)
  //    ]),
  //   ])
    
  // ]
})
export class PersonalInsuranceComponent implements OnInit {
  animated: any;
button:any;

// para:any;
  // animated.boolean=false

// triggerAnimation(button){
// this.button('fadeInDown animated');
// }
// $("#para").click(triggerAnimation () {
//   var $this = $(this);
//   $this.removeClass();
//   // $this = reset($this);
//   $this.addClass("fadeInDown animated");
// });
addToDo(){
  const input = document.getElementById('todoInput');
  input.classList.add('fadeIn');
  input.classList.remove("fadeIn");
  void input.offsetWidth;
  input.classList.add("fadeIn");
}



  accept_policies : FormGroup;
  constructor(private fb: FormBuilder , private router: Router) {
    this.accept_policies = fb.group({

      name:['',Validators.required],
      relation:['',Validators.required],
      date_of_admition:['', Validators.required]


    }


    )


}

accept_policiesSubmit(){

if(this.accept_policies.valid){
  this.router.navigate(['HospitalCash/home']);
}
}


  ngOnInit() {
  }




}
