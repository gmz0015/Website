import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../restful.service';
import { Observable, of } from 'rxjs';
import { Message } from '../../model'

@Component({
  selector: 'app-restful',
  templateUrl: './restful.component.html',
  styleUrls: ['./restful.component.css']
})
export class RESTfulComponent implements OnInit {
  messages: Message = {users: null, groups: null};
  users: string[] = [];
  loading = false;

  log_loading = false;
  logstat = false;

  constructor(
    private restfulService: RestfulService
  ) { }

  clickSwitch(): void {
    this.log_loading = true

    if (! this.logstat) {
      this.restfulService.login().subscribe(
        {
          next: loginstat => {
            console.log(loginstat);
          },
          error: e => console.log('[restful.component.ts]: ' + e),
          complete: () => {
            console.log('login complete!!!');
            this.logstat = true
            this.getUser('/api/users/')
          },
        }
      );
    }else {
      this.restfulService.logout().subscribe(
        {
          next: loginstat => {
            console.log(loginstat);
          },
          error: e => console.log('[restful.component.ts]: ' + e),
          complete: () => {
            console.log('logout complete!!!');
            this.users = ['Not login yet!']
            this.logstat = false
            this.restfulService.csrfToken = {time: '', token: ''}
          },
        }
      );
      this.logstat = false
    }

    this.log_loading = false
  }

  getMessages(): void {
    this.loading = true;
    this.restfulService.getMessages().subscribe(
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
    this.restfulService.getUsers(url).subscribe(
      {
        next: user => {
          if (user == undefined) {
            this.users = ['Not login yet!']
            this.logstat = false
          }else {
            this.users = user;
            this.logstat = true
          }
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
