import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  nRightClicks = 0;
  //private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  isShowDiv = false;
  myVariable = [0];
  headers = ["Country","Capital"];
  rows=[
    {
      "country":" ",
      "capital":" "
    },
    {
      "country":" ",
      "capital":" "
    }
  ]
  


  private _trainUrl = "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json";
    items : any;
    constructor(private http:HttpClient) {
      
    }
  
    onGroupChange(e,i){
      this.myVariable[i] = e;
      console.log(this.myVariable[i]);

    }
 addcolumnleft(){
  
 }

 addcolumnright(){
    
 }
 
 addrowtop(i,row) {
    this.rows.splice(i,0,this.newAttribute)
    this.newAttribute = {};
    row.isShowDiv = false;
  }

  addrowbottom(i,row) {
    this.rows.push(this.newAttribute)
    this.newAttribute = {};
    row.isShowDiv = false;
  }

  deleterow(index,row) {
    this.rows.splice(index, 1);
    row.isShowDiv = false;
  }

  onRightClick(e,i) {
    console.log(e,i)
    i.isShowDiv = !i.isShowDiv;
    return false;
  }
  ngOnInit(): void {

    this.http.get( this._trainUrl)
        .subscribe(res => {
          this.items = res;
          
        });
  }

 

}
