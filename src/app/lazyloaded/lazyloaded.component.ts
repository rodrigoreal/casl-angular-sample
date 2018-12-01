import { Component, OnInit } from '@angular/core';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-lazyloaded',
  templateUrl: './lazyloaded.component.html',
  styleUrls: ['./lazyloaded.component.scss']
})
export class LazyloadedComponent implements OnInit {

  constructor(private ability: Ability) { }

  ngOnInit() {
    console.log('rules from lazyloaded module', this.ability.rules);
  }
}
