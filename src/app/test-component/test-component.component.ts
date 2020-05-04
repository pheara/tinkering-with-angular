import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';
import { CurrencyPipe } from '@angular/common';

function someObservable(): Rx.Observable<string> {
  const letters = ['h', 'e', 'l', 'l', 'o', ',', ' ', 'r', 'x', '!'];
  const letters$ = Rx.from(letters);
  const zip$ = Rx.zip(letters$, Rx.interval(1000)); // emit every second
  const lettersEverySec$ = zip$.pipe(RxOp.pluck(0)); // only keep the letters and ignore the interval-count
  const growingSentence$ = lettersEverySec$.pipe(
    RxOp.scan((sentence: string, letter: string) => sentence + letter, '')
  );
  return growingSentence$;
}

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
  helloRx = '';
  helloRx$ = someObservable();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   console.log('queryParams', JSON.stringify(params));
    // });
    // start listening for route changes:
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

    // get an observable and log it
    someObservable().forEach((x) => {
      this.helloRx = x;
      console.log('obs: ', x);
    });
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
