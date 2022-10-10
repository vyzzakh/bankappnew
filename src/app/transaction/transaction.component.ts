import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
cacnum:any
transaction:any
  constructor(private ds:DataService) {
    this.cacnum=this.ds.currentacno
    this.transaction=this.ds.getTransaction(this.cacnum)
  }

  ngOnInit(): void {
  }

}
