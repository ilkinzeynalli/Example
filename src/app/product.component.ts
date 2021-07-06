import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <h3>Date pipe</h3>
      <p>{{today | date}}</p>
      <p>{{today | date: 'short'}}</p>
      <p>{{today | date: 'M/d/yy h:mm a'}}</p>
      <p>{{today | date: 'medium'}}</p>
      <p>{{today | date: 'hh:mm:ss a'}}</p>

      <h3>Decimal pipe</h3>
      <p>{{students | number}}</p>
      <p>{{students | number:'1.2-2'}}</p>

      <h3>Lower - Upper - Tittle case</h3>
      <p>{{title | titlecase}}</p>
      <p>{{title | uppercase}}</p>
      <p>{{title | lowercase}}</p>

      <h3>Currency pipe</h3>
      <p>{{price | currency}}</p>
      <p>{{completed | percent}}</p>
      <p>{{completed | percent : '2.1-10'}}</p>

  `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  constructor() { }

  today = new Date();
  students = 12345;
  title = "ilkin";
  price = 1234;
  completed = 0.26;
}
