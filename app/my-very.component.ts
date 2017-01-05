import {Component} from '@angular/core';

export class Item {
  name: string;
}

const IS: Item[] = [
  {name : 'Sally'},
  {name : 'Tally'}
];

@Component({
  selector : 'my-new-component',
  template : `<div>my very private component</div>
    <div>
      <ul *ngFor="let i of is">
        <li>{{i.name}}<br/>
          <input [(ngModel)]="i.name" placeholder="itemName"/>
        </li>
      </ul>
    </div>`
})

export class MyVeryComponent {
  is = IS;
}
