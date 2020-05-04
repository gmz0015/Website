import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../restful.service';
import { Observable, of } from 'rxjs';
import { Message } from '../../message.ts'

@Component({
  selector: 'app-restful',
  templateUrl: './restful.component.html',
  styleUrls: ['./restful.component.css']
})
export class RESTfulComponent implements OnInit {
  messages: Message;
  users: sting;
  loading = false;

  constructor(
    private restfulService: RestfulService
  ) { }

  getMessages(): void {
    this.loading = true;
    this.messages = this.restfulService.getMessages();
    this.messages.subscribe(
      {
        next: message => {
          this.messages = message;
          console.log(message);
        },
        error: e => console.log(e),
        complete: () => {
          console.log('message complete!!!');
          this.loading = false;
          this.getUser('/api/users/')
        },
      }
    );
  }

  getUser(url): void {
    this.loading = true;
    this.users = this.restfulService.getUsers(url);
    this.users.subscribe(
      {
        next: user => {
          this.users = user;
          console.log(user);
        },
        error: e => console.log(e),
        complete: () => {
          console.log('user complete!!!');
          this.loading = false;
        },
      }
    );
  }

  ngOnInit() {
    this.getMessages();
  }

}
