import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  malayalam: string;
  vatteluttu: string;
  tamil_brahmi: string;
  brahmi: string;
  aramaic: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {malayalam: '\u{D05}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D06}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D07}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D08}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D09}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D0A}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D0B}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D0E}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D0F}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D10}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D12}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D13}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D14}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D05}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D05}\u{0D02}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{D05}\u{0D03}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D15}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D16}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D17}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D18}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D19}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1A}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1B}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1C}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1D}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1E}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D1F}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D20}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D21}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D22}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D23}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D24}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D25}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D26}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D27}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D28}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2A}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2B}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2C}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2D}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2E}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D2F}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D30}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D31}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D32}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D33}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D34}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D35}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D36}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D37}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D38}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'},
  {malayalam: '\u{0D39}', vatteluttu: 'aa', tamil_brahmi: '\u{11405}', brahmi: 'aa', aramaic: 'aa'}



];

@Component({
  selector: 'app-language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.css']
})
export class LanguageTableComponent {
  displayedColumns: string[] = ['malayalam', 'vatteluttu', 'tamil_brahmi', 'brahmi', 'aramaic'];
  dataSource = ELEMENT_DATA;
}
