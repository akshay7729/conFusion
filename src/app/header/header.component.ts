import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLoginForm(){
  	const modalRef = this.modalService.open(LoginComponent);
  }

  openContactForm(){
  	const modalRef = this.modalService.open(ContactComponent);
  }

}
