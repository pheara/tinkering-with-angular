import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  items = [
    { text: 'lorem ipsum', done: false },
    { text: 'siet mies', done: true },
    { text: 'dolor', done: true },
  ];
  randomNr = 0.0;
  wipItemText = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    setInterval(() => {
      //this.zone.run(() => { // <-- why isn't this needed? https://medium.com/@MertzAlertz/what-the-hell-is-zone-js-and-why-is-it-in-my-angular-2-6ff28bcf943e
      this.randomNr = Math.random();
    }, 1000);
  }

  addItem(itemText) {
    this.items.push({ text: itemText, done: false });
  }
}
