import { Component , EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  show_pop!: boolean;
  hide_pop!: boolean;
  account_link_login!: boolean;
  account_link_signup!: boolean;
  account_link_home!:boolean;

  signupUsers : any[] = [];
  signupObj:any = {
    userName:'CURD SIGNUP',
    phoneNo:'+91234567890',
    email:'admin@mail.com',
    password:'11221122',
  };
  loginObj:any = {
    email:'admin@mail.com',
    password:'11221122',
  };
  constructor(){}
  ngOnInit(): void {
    this.show_pop = true;
    this.account_link_login = true;
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }

  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName:'',
      phoneNo:'',
      email:'',
      password:'',
    };
    
  }

  openLogin(){
    this.show_pop = false;
    this.hide_pop = true;
    this.account_link_login = false;
    this.account_link_signup = true;
  }
  openSignUp(){
    this.show_pop = true;
    this.hide_pop = false;
  }
  onlogin(){
    // debugger
    const isUserExit = this.signupUsers.find( m => m.email == this.loginObj.email && m.password == this.loginObj.password );
    console.log(this.signupUsers);
    this.show_pop =false;
    
    if (isUserExit != undefined) {
      alert('Login is Successfully');
      this.account_link_home = true
    } else {
      alert('Wronged Username && Password');
      console.error();
      
    }
  }


}
