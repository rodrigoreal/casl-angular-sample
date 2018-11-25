import { Component } from '@angular/core';
import { Ability } from '@casl/ability'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test';
  isVisibleTitle = true

  constructor(private ability: Ability) {}

  toggle() {
    if (this.ability.rules.length) {
      this.ability.update([])
    } else {
      this.ability.update([
        { actions: 'manage', subject: 'customer' }
      ])
    }
  }
}
