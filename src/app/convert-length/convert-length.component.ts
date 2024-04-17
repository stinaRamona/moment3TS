import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-length',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert-length.component.html',
  styleUrl: './convert-length.component.css'
})
export class ConvertLengthComponent {
    //Properties för formulär
    lengthInput: number = 0;  
    resultLength: number = 0; 
  
  //metod för att konvertera meter till fot och vice versa
   convertLengthMtoF(): void {
    this.resultLength = this.lengthInput * 3.281;
    } 

  convertLengthFtoM(): void {
    this.resultLength = this.lengthInput / 3.281;
  }
}
