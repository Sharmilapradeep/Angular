import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface PeriodicElement {
  capitalname: string;
  countryposition: string;
}

export interface country {
  name: string;
}
export interface State {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {countryposition: 'country', capitalname: 'state'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  displayedColumns: string[] = ['countryposition', 'capitalname'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data = ELEMENT_DATA;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  countryCtrl = new FormControl();
  filteredcountrys: Observable<country[]>;

  states: State[] = [
    {
      name: "Arkansas"
    },
    {
      name: "California"
    },
    {
      name: "Florida"
    },
    {
      name: "Texas"
    }
  ];

  countrys: country[] = [
    {
      name: "India"
    },
    {
      name: "USA"
    },
    {
      name: "Srilanka"
    },
    {
      name: "London"
    }
  ];


  addleftColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    console.log(randomColumn);   
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  addrightColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  addrow() {
    this.displayedColumns.push()
  }

  removerow(i) {
    this.displayedColumns.splice(i,1);
    this.displayedColumns=JSON.parse(JSON.stringify(this.displayedColumns));
  }


  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
    this.filteredcountrys = this.countryCtrl.valueChanges.pipe(
      startWith(""),
      map(country => (country ? this._filtercountrys(country) : this.countrys.slice()))
    );
  }

  private _filtercountrys(value: string): country[] {
    const filterValue = value.toLowerCase();

    return this.countrys.filter(
      country => country.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit(): void {
  }


  

}
