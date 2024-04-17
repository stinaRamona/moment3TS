import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertLengthComponent } from '../convert-length/convert-length.component';
import { ConvertTempComponent } from '../convert-temp/convert-temp.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule, ConvertLengthComponent, ConvertTempComponent],
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
  convertLengthMtoF(): void {
    this.resultLength = this.lengthInput * 3.281;
    } 

  convertLengthFtoM(): void {
    this.resultLength = this.lengthInput / 3.281;
  }
 //metod för att konvertera celsius till farenheit och vice versa
  convertDegreesCtoF(): void{
    this.resultTemp = this.tempInput * 9 / 5 + 32;
  } 

  convertDegreesFtoC(): void{
    this.resultTemp = (this.tempInput - 32) * 5 / 9; 
  }
}
