import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{user.name}} details!</h2>
    <div><label>name: </label>{{user.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="user.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Tour of Cornata';
  user: User = {
    id: 1,
    name: 'Mirza'
  };
}
