import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>

  initialInvestment = 0
  annualInvestment = 0
  expectedReturn = 0
  duration = 5


  onSubmit(){
    // console.log("Hi there");
    // console.log(this.initialInvestment);
    // console.log(this.annualInvestment);
    // console.log(this.expectedReturn);
    // console.log(this.duration);
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
  }

}
