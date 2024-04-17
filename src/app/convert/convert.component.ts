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

}
