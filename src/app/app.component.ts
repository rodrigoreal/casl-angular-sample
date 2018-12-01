import { Component, OnInit } from '@angular/core';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test';
  isVisibleTitle = true;

  constructor(private ability: Ability) {}

  ngOnInit() {
    this.ability.update([
      { actions: 'manage', subject: 'customer' }
    ]);
    console.log('rules from app.component', this.ability.rules);
  }

  toggle() {
    if (this.ability.rules.length) {
      this.ability.update([]);
    } else {
      this.ability.update([
        { actions: 'manage', subject: 'customer' }
      ]);
    }
  }
}
