import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title: string;
  deals: string[];

  constructor(){
      this.title = 'First ToDo App';
      this.deals = ['Write App', 'Be Happy'];
  }
  addDeal(deal: string){
      this.deals.push(deal);
      console.log('addDeal');
  }
  deleteDeal(index){
      this.deals.splice(index, 1);
      console.log('deleteDeal');
  }
}