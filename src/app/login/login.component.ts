import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  // loginObj:any = {
  //   email:'',
  //   password:'',
  // };
  // onlogin(){
  //   debugger
  //   const isUserExit = this.signupUsers.find( m => m.email == this.loginObj.email && m.password == this.loginObj.password );
  //   console.log(this.signupUsers);
    
  //   if (isUserExit != undefined) {
  //     alert('Login is Successfully');
      
  //   } else {
  //     alert('Wronged Username && Password');
  //     console.error();
      
  //   }
  // }
  constructor(){}
  ngOnInit(): void {

  }
}
