import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  //Properties för formulär
  lengthInput: number = 0;  
  resultLength: number = 0; 
  tempInput: number = 0; 
  resultTemp: number = 0; 

 //metod för att konvertera meter till fot och vice versa
  convertLengthMtoF(){
    this.resultLength = this.lengthInput * 3.281
    } 

  convertLengthFtoM(){
    this.resultLength = this.lengthInput / 3.281
  }
 //metod för att konvertera celsius till farenheit och vice versa
  convertDegreesCtoF(){
    this.resultTemp = this.tempInput + 32 * 5 / 9 
  } 

  convertDegreesFtoC(){
    this.resultTemp = this.tempInput - 32 / 5 * 9 
  }
}
