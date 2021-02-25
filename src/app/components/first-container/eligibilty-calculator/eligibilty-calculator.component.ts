import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibilty-calculator',
  templateUrl: './eligibilty-calculator.component.html',
  styleUrls: ['./eligibilty-calculator.component.scss']
})
export class EligibiltyCalculatorComponent implements OnInit {

  monthlyIncome = 0;
  monthlyExpense = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
