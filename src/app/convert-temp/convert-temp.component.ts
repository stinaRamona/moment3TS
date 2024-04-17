import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-temp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert-temp.component.html',
  styleUrl: './convert-temp.component.css'
})
export class ConvertTempComponent {
  tempInput: number = 0; 
  resultTemp: number = 0;

   //metod för att konvertera celsius till farenheit och vice versa
   convertDegreesCtoF(): void{
    this.resultTemp = this.tempInput * 9 / 5 + 32;
  } 

  convertDegreesFtoC(): void{
    this.resultTemp = (this.tempInput - 32) * 5 / 9; 
  }
}
