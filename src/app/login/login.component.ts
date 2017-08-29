import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password:'', remeber:false};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit(){
  	console.log("User: ", this.user);
  }

}
