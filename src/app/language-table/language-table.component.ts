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
  {malayalam: '\u{D05}', vatteluttu: '1', tamil_brahmi: '\u{11405}', brahmi: '\u{11005}', aramaic: '\u{10840}'},
  {malayalam: '\u{D06}', vatteluttu: '2', tamil_brahmi: '\u{11405}', brahmi: '\u{11006}', aramaic: '\u{10841}'},
  {malayalam: '\u{D07}', vatteluttu: '3', tamil_brahmi: '\u{11405}', brahmi: '\u{11007}', aramaic: 'aa'},
  {malayalam: '\u{D08}', vatteluttu: '4', tamil_brahmi: '\u{11405}', brahmi: '\u{11008}', aramaic: 'aa'},
  {malayalam: '\u{D09}', vatteluttu: '5', tamil_brahmi: '\u{11405}', brahmi: '\u{11009}', aramaic: 'aa'},
  {malayalam: '\u{D0A}', vatteluttu: '6', tamil_brahmi: '\u{11405}', brahmi: '\u{1100A}', aramaic: 'aa'},
  {malayalam: '\u{D0B}', vatteluttu: '7', tamil_brahmi: '\u{11405}', brahmi: '\u{1100B}', aramaic: 'aa'},
  {malayalam: '\u{D0E}', vatteluttu: '8', tamil_brahmi: '\u{11405}', brahmi: '\u{1100F}', aramaic: 'aa'},
  {malayalam: '\u{D0F}', vatteluttu: '9', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'aa'},
  {malayalam: '\u{0D10}', vatteluttu: '10', tamil_brahmi: '\u{11405}', brahmi: '\u{11010}', aramaic: 'Ai'},
  {malayalam: '\u{0D12}', vatteluttu: '11', tamil_brahmi: '\u{11405}', brahmi: '\u{11011}', aramaic: 'O'},
  {malayalam: '\u{0D13}', vatteluttu: '12', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'aa'},
  {malayalam: '\u{0D14}', vatteluttu: '13', tamil_brahmi: '\u{11405}', brahmi: '\u{11012}', aramaic: 'Au'},
  {malayalam: '\u{D05}\u{0D02}', vatteluttu: '15', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'aa'},
  {malayalam: '\u{D05}\u{0D03}', vatteluttu: '16', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'aa'},
  {malayalam: '\u{0D15}', vatteluttu: '18', tamil_brahmi: '\u{11405}', brahmi: '\u{11013}', aramaic: 'aa'},
  {malayalam: '\u{0D16}', vatteluttu: '19', tamil_brahmi: '\u{11405}', brahmi: '\u{11014}', aramaic: 'aa'},
  {malayalam: '\u{0D17}', vatteluttu: '20', tamil_brahmi: '\u{11405}', brahmi: '\u{11015}', aramaic: 'aa'},
  {malayalam: '\u{0D18}', vatteluttu: '21', tamil_brahmi: '\u{11405}', brahmi: '\u{11016}', aramaic: 'aa'},
  {malayalam: '\u{0D19}', vatteluttu: '22', tamil_brahmi: '\u{11405}', brahmi: '\u{11017}', aramaic: 'Gha'},
  {malayalam: '\u{0D1A}', vatteluttu: '23', tamil_brahmi: '\u{11405}', brahmi: '\u{11018}', aramaic: 'aa'},
  {malayalam: '\u{0D1B}', vatteluttu: '24', tamil_brahmi: '\u{11405}', brahmi: '\u{11019}', aramaic: 'aa'},
  {malayalam: '\u{0D1C}', vatteluttu: '25', tamil_brahmi: '\u{11405}', brahmi: '\u{1101A}', aramaic: 'aa'},
  {malayalam: '\u{0D1D}', vatteluttu: '26', tamil_brahmi: '\u{11405}', brahmi: '\u{1101B}', aramaic: 'aa'},
  {malayalam: '\u{0D1E}', vatteluttu: '27', tamil_brahmi: '\u{11405}', brahmi: '\u{1101C}', aramaic: 'Nya'},
  {malayalam: '\u{0D1F}', vatteluttu: '28', tamil_brahmi: '\u{11405}', brahmi: '\u{1101D}', aramaic: 'Tta'},
  {malayalam: '\u{0D20}', vatteluttu: '29', tamil_brahmi: '\u{11405}', brahmi: '\u{1101E}', aramaic: 'Ttha'},
  {malayalam: '\u{0D21}', vatteluttu: '30', tamil_brahmi: '\u{11405}', brahmi: '\u{1101F}', aramaic: 'aa'},
  {malayalam: '\u{0D22}', vatteluttu: '31', tamil_brahmi: '\u{11405}', brahmi: '\u{11020}', aramaic: 'aa'},
  {malayalam: '\u{0D23}', vatteluttu: '32', tamil_brahmi: '\u{11405}', brahmi: '\u{11021}', aramaic: 'Nna'},
  {malayalam: '\u{0D24}', vatteluttu: '33', tamil_brahmi: '\u{11405}', brahmi: '\u{11022}', aramaic: 'aa'},
  {malayalam: '\u{0D25}', vatteluttu: '34', tamil_brahmi: '\u{11405}', brahmi: '\u{11023}', aramaic: 'aa'},
  {malayalam: '\u{0D26}', vatteluttu: '35', tamil_brahmi: '\u{11405}', brahmi: '\u{11024}', aramaic: 'aa'},
  {malayalam: '\u{0D27}', vatteluttu: '40', tamil_brahmi: '\u{11405}', brahmi: '\u{11025}', aramaic: 'aa'},
  {malayalam: '\u{0D28}', vatteluttu: '41', tamil_brahmi: '\u{11405}', brahmi: '\u{11026}', aramaic: 'Na'},
  {malayalam: '\u{0D2A}', vatteluttu: '42', tamil_brahmi: '\u{11405}', brahmi: '\u{11027}', aramaic: 'aa'},
  {malayalam: '\u{0D2B}', vatteluttu: '43', tamil_brahmi: '\u{11405}', brahmi: '\u{11028}', aramaic: 'aa'},
  {malayalam: '\u{0D2C}', vatteluttu: '44', tamil_brahmi: '\u{11405}', brahmi: '\u{11029}', aramaic: 'aa'},
  {malayalam: '\u{0D2D}', vatteluttu: '45', tamil_brahmi: '\u{11405}', brahmi: '\u{1102A}', aramaic: 'aa'},
  {malayalam: '\u{0D2E}', vatteluttu: '46', tamil_brahmi: '\u{11405}', brahmi: '\u{1102B}', aramaic: 'Ma'},
  {malayalam: '\u{0D2F}', vatteluttu: '47', tamil_brahmi: '\u{11405}', brahmi: '\u{1102C}', aramaic: 'Ya'},
  {malayalam: '\u{0D30}', vatteluttu: '48', tamil_brahmi: '\u{11405}', brahmi: '\u{1102D}', aramaic: 'Ra'},
  {malayalam: '\u{0D31}', vatteluttu: '49', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Rra'},
  {malayalam: '\u{0D32}', vatteluttu: '50', tamil_brahmi: '\u{11405}', brahmi: '\u{1102E}', aramaic: 'La'},
  {malayalam: '\u{0D33}', vatteluttu: '51', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: 'Va'},
  {malayalam: '\u{0D34}', vatteluttu: '52', tamil_brahmi: '\u{11405}', brahmi: '', aramaic: ''},
  {malayalam: '\u{0D35}', vatteluttu: '53', tamil_brahmi: '\u{11405}', brahmi: '\u{1102F}', aramaic: 'Va'},
  {malayalam: '\u{0D36}', vatteluttu: '54', tamil_brahmi: '\u{11405}', brahmi: '\u{11031}', aramaic: 'Ssa'},
  {malayalam: '\u{0D37}', vatteluttu: '55', tamil_brahmi: '\u{11405}', brahmi: '\u{11030}', aramaic: 'Sha'},
  {malayalam: '\u{0D38}', vatteluttu: '56', tamil_brahmi: '\u{11405}', brahmi: '\u{11032}', aramaic: 'Sa'},
  {malayalam: '\u{0D39}', vatteluttu: '57', tamil_brahmi: '\u{11405}', brahmi: '\u{11033}', aramaic: 'Ha'},
  {malayalam: '', vatteluttu: '58', tamil_brahmi: '\u{11405}', brahmi: '\u{11034}', aramaic: 'Lla'},
  {malayalam: '', vatteluttu: '59', tamil_brahmi: '\u{11405}', brahmi: '\u{11035}', aramaic: 'Llla'},
  {malayalam: '', vatteluttu: '60', tamil_brahmi: '\u{11405}', brahmi: '\u{11036}', aramaic: 'Rra'},
  {malayalam: '', vatteluttu: '61', tamil_brahmi: '\u{11405}', brahmi: '\u{11037}', aramaic: 'Nnna'},

  {malayalam: 'Rr', vatteluttu: '8', tamil_brahmi: '\u{11405}', brahmi: '\u{1100C}', aramaic: 'aa'},
  {malayalam: 'L', vatteluttu: '9', tamil_brahmi: '\u{11405}', brahmi: '\u{1100D}', aramaic: 'aa'},
  {malayalam: 'Ll', vatteluttu: '10', tamil_brahmi: '\u{11405}', brahmi: '\u{1100E}', aramaic: 'aa'},



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
