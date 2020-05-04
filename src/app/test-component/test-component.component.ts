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
  randomId = 0;
  currentId = '0';
  incId = 0;
  wipItemText = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   console.log('queryParams', JSON.stringify(params));
    // });
    this.route.paramMap.forEach((params) => {
      console.log('paramMap', JSON.stringify(params));
      this.currentId = params.get('id');
    });

    // start random number output
    setInterval(() => {
      //this.zone.run(() => { // <-- why isn't this needed? https://medium.com/@MertzAlertz/what-the-hell-is-zone-js-and-why-is-it-in-my-angular-2-6ff28bcf943e
      this.randomNr = Math.random();
      this.randomId = Math.floor(this.randomNr * 100);
    }, 1000);
  }

  addItem(itemText) {
    this.items.push({ text: itemText, done: false });
  }
  clickedItem(index) {
    // event.preventDefault();
    console.log('event: ', index);
    const item = this.items[index];
    if (item) {
      this.items[index] = { ...item, done: !item.done };
    }
  }
}
