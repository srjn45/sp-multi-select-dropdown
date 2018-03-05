import { Component } from '@angular/core';
import { Item } from './sp-multi-select-dropdown/model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Item[] = [
    new Item("apple", 1, true),
    new Item("banana", 2, false),
    new Item("orange", 3, false),
    new Item("kiwi", 4, true),
    new Item("pineapple", 5, false),
  ]

  onChange(items) {
    console.log(items);
  }

}
